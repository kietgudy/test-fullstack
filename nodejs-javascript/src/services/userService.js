require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const createUserService = async (name, email, password) => {
  try {
    //check email exist
    const user =  await User.findOne({email})
    if (user) {
      return null
    }
    const hashPassword = await bcrypt.hash(password, saltRounds);

    let result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: "ADMIN",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const handleLoginService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const isMatchPassword = await bcrypt.compare(password, user.password);
      if (!isMatchPassword) {
        return {
          EC: 2,
          EM: "Email/Password not true",
        };
      } else {
        //create access token
        const payload = {
          email: user.email,
          name: user.name,
        };
        const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });
        return {
          EC: 0,
          access_token,
          user: {
            email: user.email,
            name: user.name,
          },
        };
      }
    } else {
      return {
        EC: 1,
        EM: "Email/Password not true",
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getUserService = async () => {
  try {
    let result = await User.find({})
  return result
  } catch (error) {
    console(error) 
    return null
  }
}

module.exports = {
  createUserService,
  handleLoginService,getUserService
};
