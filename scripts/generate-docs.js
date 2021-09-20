const path = require('path');
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');
const startCase = require('lodash.startcase');
const prettier = require('prettier');
const { ensureDir } = require('fs-extra');
const { TypeScriptAnalyzer } = require('@checkup/core');

const rootDir = path.dirname(__dirname);
const packages = ['@checkup/cli'];

let apiSidebar = {
  type: 'category',
  label: 'Packages',
  items: [],
  collapsed: false,
};

async function updateApiDoc(package) {
  const packagePath = path.join('node_modules', package, 'lib', 'index.d.ts');
  const filePathList = getFilePathList(path.resolve(rootDir, packagePath));

  for (let filePath of filePathList) {
    const fileName = path.basename(filePath);
    const docsPackageDir = path.join('docs', 'api', package);
    const markdownFilePath = path.resolve(
      rootDir,
      docsPackageDir,
      `${fileName}.md`
    );
    const markdownContent = getMarkdownContent(markdownFilePath, fileName);

    updateSideBars(fileName, package);

    let docsContent = await jsdoc2md.render({
      files: `${filePath}.js`,
    });

    await ensureDir(docsPackageDir);

    fs.writeFileSync(
      markdownFilePath,
      markdownContent.replace(
        `<!--DOCS_START-->[\\S\\s]*<!--DOCS_END-->`,
        `<!--DOCS_START-->\n${docsContent}\n<!--DOCS_END-->`
      )
    );
  }
}

/**
 * Get a list of file paths from index.d.ts
 * @param {string} indexPath - file path of index.d.ts in checkup
 *
 * @return {Array} filePathList - a list of file paths of export API in index.d.ts
 */
function getFilePathList(indexPath) {
  const dirName = path.dirname(indexPath);
  const indexSource = fs.readFileSync(indexPath, 'utf-8');

  let analyzer = new TypeScriptAnalyzer(indexSource);
  let filePathList = [];

  analyzer.analyze({
    ExportNamedDeclaration({ node }) {
      filePathList.push(path.resolve(dirName, node.source.value));
    },
  });

  return filePathList;
}

function getMarkdownContent(mdFilePath, fileName) {
  let mdContent;

  if (fs.existsSync(mdFilePath)) {
    mdContent = fs.readFileSync(mdFilePath, 'utf8');
  } else {
    mdContent = `---
id: ${fileName}
title: ${fileName}
---

<!--DOCS_START-->
<!--DOCS_END-->
`;
  }

  return mdContent;
}

function updateSideBars(fileName, package) {
  let itemPath = path.join('api', package, fileName);

  apiSidebar.items.map((item) => {
    if (item.label === package) {
      item.items.push(itemPath);
    }
  });
}

(async function () {
  debugger;
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
