const bcrypt = require("bcrypt");
const { createToken } = require("../middlewares/auth");
const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, isGoogleUser, role } = req.body;

    let hashPass;
    let user;

    if (isGoogleUser) {
      hashPass = await bcrypt.hash(password, 10);

      user = await User.create({
        name,
        email,
        password: hashPass,
        isGoogleUser,
        role,
      });

      const token = createToken(user._id, user.email);

      return res.status(201).json({
        success: true,
        message: "User registered",
        user,
        token,
      });
    } else {
      hashPass = await bcrypt.hash(password, 10);

      user = await User.create({
        name,
        email,
        password: hashPass,
        isGoogleUser,
        role,
      });

      const token = createToken(user._id, user.email);

      return res.status(201).json({
        success: true,
        message: "User registered",
        user,
        token,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password, googleLogin } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Enter email and password",
      });
    }

    if (googleLogin) {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User does not exists",
        });
      }

      if (user.isGoogleUser) {
        const token = createToken(user._id, user.email);

        return res.status(200).json({
          success: true,
          message: "User Logged In successfully",
          token,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "User does not exists",
        });
      }
    } else {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User does not exists",
        });
      }

      if (user.isGoogleUser) {
        return res.status(401).json({
          success: false,
          message: "User does not exists",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Wrong Credentials",
        });
      } else {
        const token = createToken(user._id, user.email);

        return res.status(200).json({
          success: true,
          message: "User Logged In successfully",
          token,
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.isLogin = async (req,res) => {
    try{
        const user = await User.findById(req.user._id)

        if(!user){
            return res.status(200).json({
                success: true,
                isLogin: false
            })
        }

        if(user){
            return res.status(200).json({
                success: true,
                isLogin: true,
                user
            })
        }

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

exports.getLoginUser = async (req,res) => {
  try{  

    

    const user = await User.findById(req.user._id) ;

    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isGoogleUser: user.isGoogleUser,
      role: user.role,
      createdAt: user.createdAt,      
    }


    res.status(200).json({
        success: true,
        user: userData
    })

  }catch(err){
    res.status(500).json({
      success: false,
      message: err.message
  })
  }
}