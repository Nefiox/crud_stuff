let fs = require('fs');

let content = fs.readFileSync('prueba.txt', {encoding:'utf-8'});

console.log(content);