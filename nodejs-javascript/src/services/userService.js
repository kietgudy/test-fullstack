const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const createUserService = async (name, email, password) => {
  try {
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
    const user = await User.findOne({email: email})
    if(user) {
      const isMatchPassword = await bcrypt.compare(password, user.password)
      if(!isMatchPassword) {
        return {
          EC: 2,
          EM: 'Email/Password not true'
        }
      } else {
        //create access token
        return "create access token"
      }
    }else{
      return{
        EC: 1,
        EM: 'Email/Password not true'
      }
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,handleLoginService
};
