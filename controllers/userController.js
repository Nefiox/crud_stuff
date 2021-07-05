let users = [
    {id: 1, name: 'Juan'},
    {id: 2, name: 'Karina'},
    {id: 3, name: 'Roberto'},
    {id: 4, name: 'Leonor'},
    {id: 5, name: 'Dario'}
];

let userController = {
    register: (req, res) => res.render('register'),
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
    }

}


module.exports = userController;