const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    res.status(401).send({ message: "Login to get authorized" });
  }
  jwt.verify(token, keys.accessTokenKey, (err, userData) => {
    if (err) return res.send(403);
    req.userData = userData;
    next();
  });
};
