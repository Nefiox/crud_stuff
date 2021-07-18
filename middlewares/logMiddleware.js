const fs = require('fs');

function logMiddleware(req, res, next) {
    fs.appendFileSync('log.txt', `El usuario entró a la ruta ${req.url}\n`);

    next();
}

module.exports = logMiddleware;