// Revisa si el usuario NO está logueado
function guestMiddleware(req, res, next) {
    if(req.session.usuarioLogueado == undefined) {
        next();
    } else {
        res.send('Está página es solo para invitados');
    }
}

module.exports = guestMiddleware;