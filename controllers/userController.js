let fs = require('fs');
// let users = [
//     {id: 1, name: 'Juan'},
//     {id: 2, name: 'Karina'},
//     {id: 3, name: 'Roberto'},
//     {id: 4, name: 'Leonor'},
//     {id: 5, name: 'Dario'}
// ];

let userController = {
    register: (req, res) => res.render('register'),
    create: (req,res) => {
        // const userInfo = {nombre, edad, email} = req.body
        const userInfo = {nombre: req.body.nombre, edad: req.body.edad, email: req.body.email}

        // 1) Leer el archivo de usuarios.json y parsearlo para poder leer el JSON
        let readUserFile = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        // Validación si readUserFile está vacio
        let usuarios;
        if (readUserFile == '') {
            usuarios = [];
        } else { 
            usuarios = JSON.parse(readUserFile); // Debería ser un array
        }
        usuarios.push(userInfo);

        usersJSON = JSON.stringify(usuarios);

        fs.writeFileSync('usuarios.json', usersJSON); 

        res.redirect('/users/list');
    },
    login: (req, res) => res.render('login'),
    list: (req, res) => {
        let archivoUsers = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        let users = JSON.parse(archivoUsers);

        res.render('userList', { users })
    },
    search: (req, res) => {
        let loQueBuscoElUsuario = req.query.search;

        let archivoUsers = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        let users = JSON.parse(archivoUsers);

        let resultados = [];
        for(i = 0; i < users.length; i++) {
            if(users[i].name.includes(loQueBuscoElUsuario)) {
                resultados.push(users[i]);
            }
        }
        res.render('results', {resultados})
    },
    edit: (req, res) => {
        let idUser = req.params.idUser;
        let userToEdit = users[idUser];
        res.render('userEdit', {userToEdit});

        // I'LL TEST IT LATER
        // let idUser = req.params.idUser;
        // let archivoUsers = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        // let users = JSON.parse(archivoUsers);

        // let userToEdit = users[0];
        // res.render('userEdit', {userToEdit});
    },
    delete: (req, res) => {
        
    }

}


module.exports = userController;