const fs = require('fs');

// Read the content of the file 'hello.txt'
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content from "hello.txt":', data);
});
