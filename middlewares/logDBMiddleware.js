const fs = require('fs');

function logDBMiddleware(req, res, next) {
    fs.appendFileSync('logDB.txt', `Se creó un registro al ingresar a la página ${req.url}\n`);

    next();
}

module.exports = logDBMiddleware;