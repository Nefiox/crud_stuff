const bcrypt = require('bcryptjs');
let fs = require('fs');
const { validationResult } = require('express-validator');


let userController = {
    register: (req, res) => res.render('register'),
    create: (req,res) => {
        const userInfo = {nombre, edad, email} = req.body
        // const userInfo = {nombre: req.body.nombre, edad: req.body.edad, email: req.body.email}

        let readUserFile = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        // Validación si readUserFile está vacio
        let usuarios;
        if (readUserFile == '') {
            usuarios = [];
        } else { 
            usuarios = JSON.parse(readUserFile); // Array
        }
        usuarios.push(userInfo);

        usersJSON = JSON.stringify(usuarios);

        fs.writeFileSync('usuarios.json', usersJSON); 

        res.redirect('/users/list');
    },
    login: (req, res) => {
        return res.render('login');
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            let usersJSON = fs.readFileSync('usuarios.json', {  })
            let users;
            if(usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }

            for(let i = 0; i<users.length; i++) {
                if(users[i].email == req.body.email) {
                    if(bcrypt.compareSync(req.body.password, users[i].password[i])) {
                        let usuarioALoguearse = users[i];
                        break;
                    }
                }
            }

            if(usuarioALoguearse == undefined) {
                return res.render('login', { errors: [
                    {msg: 'Credenciales inválidas'}
                ]});
            }

            req.session.usuarioLogueado = usuarioALoguearse;
            res.render('success');
        } else {
            return res.render('login', { errors: errors.errors })
        }
    },
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