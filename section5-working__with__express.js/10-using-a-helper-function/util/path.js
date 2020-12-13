const path = require('path');

// path.dirname returns the directory name(directory path) of a path
// process.mainmodule is deprecated
// module.exports = path.dirname(process.mainModule.filename);
// alternative would be require.main
module.exports = path.dirname(require.main.filename);