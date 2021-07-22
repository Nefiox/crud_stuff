var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.send('Un mensaje'));

router.get('/pruebaSession', (req, res) => {
    if(req.session.numeroVisitas == undefined) {
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;

    res.send('Session tiene el número: ' + req.session.numeroVisitas);
})

router.get('/mostrarNumeroSession', (req, res) => {
    res.send('Session tiene el número: ' + req.session.numeroVisitas);
    
})

module.exports = router;