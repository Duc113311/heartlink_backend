const jwt = require("jsonwebtoken");
const Enumeration = require("../enumeration/conmon");

const Middleware = {};

/**
 * Check quyền truy cập
 * @param {*} req
 * @param {*} res
 * @returns
 */
Middleware.authenToken = (req, res) => {
  const authorizationHeader = req.headers["authorization"];
  console.log("authorizationHeader", authorizationHeader);

  const token = authorizationHeader.split(" ")[1];
  console.log("token", token);

  // error 401 Ko có quyền , thiếu Token
  if (!token) return { token, status: Enumeration.HTTPStatusCode.Unauthorized };

  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) {
      //Error 403
      return { err, data, status: Enumeration.HTTPStatusCode.Forbidden }; // Accesstoken sai
    } else {
      console.log("Data: ", data);
      return data; // True
    }
  });
};

module.exports = Middleware;
