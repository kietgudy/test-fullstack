const { createUserService } = require("../services/userService");

const createUser = async (req, res) => {
  console.log("chekc res", req.body)
  const {name, email, password} = req.body
  const data = await createUserService(name, email, password)
  return res.status(200).json(data)
};

module.exports = {
  createUser,
};
