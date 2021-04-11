const path = require('path');

//NOTE: path.dirname returns the directory name(directory path) of a path
//NOTE: process.mainmodule is deprecated
// module.exports = path.dirname(process.mainModule.filename);
//NOTE: alternative would be require.main, the entry point of the current application can be obtained by checking require.main.filename
module.exports = path.dirname(require.main.filename);