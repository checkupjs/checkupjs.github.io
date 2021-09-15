const path = require('path');
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');
const { TypeScriptAnalyzer } = require('@checkup/core')

const DEFAULT_MARKER = 'DOCS';
let _placeholder;
let _marker;

const packages = [
  'cli'
];

function setMarker(marker = DEFAULT_MARKER) {
  _marker = marker;
  _placeholder = new RegExp(`<!--${_marker}_START-->[\\S\\s]*<!--${_marker}_END-->`);
}

async function updateApiDoc(package) {
  const rootDir = path.dirname(__dirname);
  const packagePath = path.join('node_modules', '@checkup', package, 'lib', 'index.d.ts');
  const filePathList = getFilePathList(path.resolve(rootDir, packagePath));

  for (let filePath of filePathList) {
    // get file name from file path. e.g. some/path/file.js -> file
    const fileName = filePath.replace(/^.*[\\\/]/, '');
    const mdDir = path.join('docs', 'api', package);
    const mdFilePath = path.resolve(rootDir, mdDir, `${fileName}.md`);
    const mdContent = getMdContent(mdFilePath, fileName);

    let docsContent = await jsdoc2md.render({
      files: `${filePath}.js`
    });

    fs.writeFileSync(
      mdFilePath,
      mdContent.replace(_placeholder, `<!--${_marker}_START-->\n${docsContent}\n<!--${_marker}_END-->`)
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
  
  let tsAnalyzer = new TypeScriptAnalyzer(indexSource);
  let filePathList = [];

  tsAnalyzer.analyze({
    ExportNamedDeclaration({node}) {
      filePathList.push(path.resolve(dirName, node.source.value));
    }
  });

  return filePathList;
}

function getMdContent(mdFilePath, fileName) {
  let mdContent;

  if (fs.existsSync(mdFilePath)) {
    mdContent = fs.readFileSync(mdFilePath, 'utf8');
  } else {
    mdContent = 
`---
id: ${fileName}
title: ${fileName}
---

<!--${_marker}_START-->
<!--${_marker}_END-->
`
  }

  return mdContent;
};


(async function () {
  setMarker();

  for (let package of packages) {
    await updateApiDoc(package);
  }
})();
