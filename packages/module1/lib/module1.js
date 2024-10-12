const fs = require('fs');
const path = require('path');

function createFile() {
    // 使用 path.resolve() 定位到项目根目录的 dist 文件夹
    const filePath = path.resolve(__dirname, '../dist/hello-lerna.txt'); 
    const content = 'hello lerna';

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return console.error(`Error writing file: ${err.message}`);
        }
        console.log('File created and content written successfully in the dist folder!');
    });
}

// 调用函数生成文件
createFile();