let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', userController.register);
router.post('/register', userController.create); // CREA INFO
router.get('/login', userController.login);
router.get('/list', userController.list);
router.get('/search', userController.search);
router.get('/edit/:idUser', userController.edit);
router.put('/edit/', (req, res) => res.send('xd')); // ACTUALIZA INFO
router.delete('/delete/:idUser', (req, res) => res.send('delettt')) // BORRA INFO

module.exports = router;