let fs = require('fs');

function remembermeMiddleware(req, res, next) {
    if(req.cookies.rememberme != undefined && req.session.usuarioLogueado == undefined) {
        let usersJSON = fs.readFileSync('usuarios.json', {encoding:'utf-8'})
        let users;
        if(usersJSON == "") {
            users = [];
        } else { 
            users = JSON.parse(usersJSON);
        }

        let usuarioALoguearse;
        
        for(let i = 0; i<users.length; i++) {
            if(users[i].email == req.cookies.rememberme) {
                usuarioALoguearse = users[i];
                break;
            }
        }
        
        req.session.usuarioLogueado = usuarioALoguearse;
    }
    next();
}

module.exports = remembermeMiddleware;