let bcrypt = require('bcryptjs');
let fs = require('fs');

let content = fs.readFileSync('prueba.txt', {encoding:'utf-8'});

let pwd = 'holaamikos'
let resultado = bcrypt.hashSync(pwd, 10)

let validation = bcrypt.compareSync(pwd, resultado)
console.log(validation);