module.exports = (req, res, next) => {
  if (!req.userData && req.userData.role !== "superadmin") {
    res.status(403).send({ message: "You are not authorized to do it." });
  }
  next();
};
