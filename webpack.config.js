const path = require('path');
module.exports = {
    entry: "./firebase-auth-panel.js",
    output: {
        path: path.join(__dirname, ''),
        filename: "firebase-auth-panel.bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".js"],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./')
          ]
    }
}