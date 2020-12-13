const path = require('path');

// path.dirname can get the directory name(path) of a file
const rootPath = path.dirname(require.main.filename);

module.exports = rootPath;