
const path = require('path');
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');

/**
 * Get a list of file paths from index.d.ts
 * @param {string} indexPath - file path of index.d.ts in checkup
 * @return {Array} filePathList - a list of file paths of export API in index.d.ts
 */
function getFilePathList(indexPath) {
  const lines = fs.readFileSync(indexPath, 'utf-8').toString().split('\n');
  const dirName = path.dirname(indexPath)

  let filePathList = [];

  lines.map((line) => {
    if (line.includes('export')) {
      relativePath = line.match(/\'(.*)\'/);
      filePathList.push(path.resolve(dirName, relativePath[1]));
    }
  });

  return filePathList;
}

(async function () {
  const rootDir = path.dirname(__dirname);
  const filePathList = getFilePathList(path.resolve(rootDir, 'node_modules/@checkup/cli/lib/index.d.ts'));
  const docsPlaceholder = /<!--DOCS_START-->[\S\s]*<!--DOCS_END-->/;

  for (let filePath of filePathList) {
    const fileName = filePath.replace(/^.*[\\\/]/, '');
    const mdFile = path.resolve(rootDir, 'docs/api/cli', `${fileName}.md`);
    const mdContent = fs.readFileSync(mdFile, 'utf8');

    let docsContent = await jsdoc2md.render({
      files: `${filePath}.js`
    });

    fs.writeFileSync(
      mdFile,
      mdContent.replace(docsPlaceholder, `<!--DOCS_START-->\n\n${docsContent}\n<!--DOCS_END-->`)
    );
  }
})();
