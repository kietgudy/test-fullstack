const {
  createUserService,
  handleLoginService,
  getUserService,
} = require("../services/userService");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const data = await createUserService(name, email, password);
  return res.status(200).json(data);
};
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const data = await handleLoginService(email, password);
  return res.status(200).json(data);
};
const getUser = async (req, res) => {
  const data = await getUserService();
  return res.status(200).json(data);
};

module.exports = {
  createUser,
  handleLogin,getUser
};
