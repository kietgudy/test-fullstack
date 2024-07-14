const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const white_lists = ["/", "/register", "/login"];

  if (white_lists.find((item) => "/v1/api" + item === req.originalUrl)) {
    next();
  } else {
    if (req?.headers?.authorization?.split(" ")[1]) {
      const token = req.headers.authorization.split(" ")[1];

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        next();
      } catch (error) {
        return res
          .status(401)
          .json({ message: "Unauthorized or token expired" });
      }
    } else {
      return res.status(401).json({ message: "Unauthorized or token expired" });
    }
  }
};

module.exports = auth;
