const { Router } = require('express');
const router = Router();
const {signUp,login,logout,currentUser} = require('../controllers/auth-controller');

router.post('/signup',signUp);

router.post('/login',login);

router.get('/currentUser',currentUser);

router.get('/logout',logout);

module.exports = router;