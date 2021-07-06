let users = [
    {id: 1, name: 'Juan'},
    {id: 2, name: 'Karina'},
    {id: 3, name: 'Roberto'},
    {id: 4, name: 'Leonor'},
    {id: 5, name: 'Dario'}
];

let userController = {
    register: (req, res) => res.render('register'),
    create: (req,res) => {
        const userInfo = {nombre, edad, email} = req.body
        // let usuario = {
        //     nombre: req.body.nombre,
        //     edad: req.body.edad,
        //     email: req.body.email
        // }
        console.log(userInfo);
        res.redirect('/users/list');
        
    },
    login: (req, res) => res.render('login'),
    list: (req, res) => res.render('userList', { users }),
    search: (req, res) => {
        let loQueBuscoElUsuario = req.query.search;

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
    },
    delete: (req, res) => {
        
    }

}


module.exports = userController;