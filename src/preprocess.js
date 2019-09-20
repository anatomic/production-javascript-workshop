const { readFile } = require("fs").promises;
const { emojify } = require("node-emoji");

const CODE_REGEX = /\{\{\{(?<path>.+)\}\}\}/gi;

const getCodeSampleFilePaths = markdown =>
  markdown.match(CODE_REGEX).map(match => {
    CODE_REGEX.lastIndex = 0;
    return [match, CODE_REGEX.exec(match).groups.path];
  });

const loadCodeSampleFromPath = ([match, path]) =>
  readFile(`${path}`, "utf-8").then(contents => [
    match,
    buildCodeBlockHtml(path, contents)
  ]);

const buildCodeBlockHtml = (path, code) =>
  `<pre><code class="hljs javascript" data-trim>${code}</code></pre>
  
  <div class="code-example-path">${path}</div>
  `;

const injectCodeSamples = (markdown, scripts) =>
  scripts.reduce(
    (output, [match, contents]) => output.replace(match, contents),
    markdown
  );

module.exports = async markdown => {
  const scripts = await Promise.all(
    getCodeSampleFilePaths(markdown).map(loadCodeSampleFromPath)
  );
  return emojify(injectCodeSamples(markdown, scripts));
};
