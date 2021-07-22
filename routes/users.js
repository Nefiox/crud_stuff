let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let logDBMiddleware = require('../middlewares/logDBMiddleware');
let { check } = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', userController.register);
router.post('/register', logDBMiddleware, userController.create); // CREA INFO, USO DE MIDDLEWARE NIVEL RUTA
router.get('/login', userController.login);
router.post('/login', [
  check('email').isEmail().withMessage('Email inválido'),
  check('password').isLength({min: 4}).withMessage('La contraseña debe tener mínimo 4 caracteres')
], userController.processLogin);

router.get('/list', userController.list);
router.get('/search', userController.search);
router.get('/edit/:idUser', userController.edit);
router.put('/edit/', (req, res) => res.send('Usuario actualizado')); // ACTUALIZA INFO
router.delete('/delete/:idUser', (req, res) => res.send('Usuario eliminado')) // BORRA INFO

module.exports = router;