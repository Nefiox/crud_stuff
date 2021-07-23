// Revisa si el usuario SÍ está logueado
function authMiddleware(req, res, next) {
    if(req.session.usuarioLogueado != undefined) {
        next();
    } else {
        res.send('Está página es solo para usuarios');
    }
}

module.exports = authMiddleware;