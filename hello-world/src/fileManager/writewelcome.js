
const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File created successfully');
});
