const express = require('express')
const {registerUser, loginUser, isLogin
} = require('../controllers/userControls')
const {isAuthenticated} = require('../middlewares/auth') 

const router = express.Router() ;


router.route("/register").post(registerUser) ;

router.route("/login").post(loginUser) ;

router.route("/isLogin").get(isAuthenticated,isLogin) ;


module.exports = router ;