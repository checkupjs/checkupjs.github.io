const path = require('path');
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');
const startCase = require('lodash.startcase');
const prettier = require('prettier');
const { ensureDir } = require('fs-extra');
const { TypeScriptAnalyzer } = require('@checkup/core');

const rootDir = path.dirname(__dirname);
const packages = ['@checkup/cli', '@checkup/core'];
const sidebarConfig = require('../api-sidebar-config.json');

let apiSidebar = {
  type: 'category',
  label: 'Packages',
  items: [],
  collapsed: false,
};

async function updateApiDoc(package) {
  const packagePath = path.join('node_modules', package, 'lib', 'index.d.ts');
  const exportedModules = getExportedModules(
    package,
    path.resolve(rootDir, packagePath)
  );

  for (let module of exportedModules) {
    const docsPackageDir = path.join('docs', 'api', package);
    const markdownFilePath = path.resolve(
      rootDir,
      docsPackageDir,
      `${module.name}.md`
    );

    updateSideBars(module.name, package);

    let docsContent = await jsdoc2md.render({
      files: `${module.filePath}.js`,
    });

    await ensureDir(docsPackageDir);

    fs.writeFileSync(
      markdownFilePath,
      getMarkdownTemplate(module.name, docsContent)
    );
  }
}

/**
 * Get a list of file paths from index.d.ts
 * @param {string} indexPath - file path of index.d.ts in checkup
 *
 * @return {Array} filePathList - a list of file paths of export API in index.d.ts
 */
function getExportedModules(package, indexPath) {
  const dirName = path.dirname(indexPath);
  const indexSource = fs.readFileSync(indexPath, 'utf-8');

  let analyzer = new TypeScriptAnalyzer(indexSource);
  let filePathList = [];

  analyzer.analyze({
    ExportDeclaration({ node }) {
      // filter out specific modules we don't want to include in the documentation
      if (
        sidebarConfig[package] &&
        sidebarConfig[package].excludeModuleNames.some((moduleName) =>
          node.source.value.includes(moduleName)
        )
      ) {
        return;
      }

      if (node.source.value.includes('types')) {
        return;
      }

      if (node.specifiers && node.specifiers.length === 1) {
        filePathList.push({
          filePath: path.resolve(dirName, node.source.value),
          name: node.specifiers[0].exported.name,
        });
        return;
      }

      filePathList.push({
        filePath: path.resolve(dirName, node.source.value),
        name: path.basename(node.source.value),
      });
    },
  });

  debugger;
  return filePathList;
}

function getMarkdownTemplate(fileName, content) {
  return `---
id: ${fileName}
title: ${fileName}
---

${content}
`;
}

function updateSideBars(fileName, package) {
  let itemPath = path.join('api', package, fileName);

  apiSidebar.items.map((item) => {
    if (item.label === package) {
      item.items.push(itemPath);
      item.items = item.items.sort();
    }
  });
}

(async function () {
  for (let package of packages) {
    apiSidebar.items.push({
      type: 'category',
      label: package,
      items: [],
      collapsed: false,
    });

    await updateApiDoc(package);
  }

  const apiSidebarPath = path.join(rootDir, 'api-sidebar.js');

  const formatted = prettier.format(
    `module.exports = ${JSON.stringify([apiSidebar])};`,
    {
      parser: 'babel',
    }
  );

  fs.writeFileSync(apiSidebarPath, formatted);
})();
