const fs = require('fs');
const path = require('path');

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && !filePath.includes('node_modules') && !filePath.includes('.next')) {
            callback(filePath, stat);
        } else if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.next') && !filePath.includes('.git')) {
            walkSync(filePath, callback);
        }
    });
}

const dir = 'd:/Source Code Aplikasi Wasilah/Bakti Kawan Sejahtera';
walkSync(dir, function(filePath, stat) {
    if (filePath.match(/\.(ts|tsx|js|md|json|css|html|env.*|mjs)$/)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(/logo\.webp/g, 'logo.png');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated: ' + filePath);
        }
    }
});
