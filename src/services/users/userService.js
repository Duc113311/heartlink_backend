const { v4: uuidv4 } = require("uuid");
const User = require("../../config/config.js");
const authjwt = require("../../config/config.js");
const Middleware = require("../../middlewares/validateAPI");
const Enumeration = require("../../enumeration/conmon");
const jwt = require("jsonwebtoken");
const UserService = {};

/**
 * Lấy danh sách thông tin người dùng
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 * CreateBy: NVDuc
 */
UserService.getAllUserSevice = async (req, res, next) => {
  const authenData = await Middleware.authenToken(req, res);
  console.log("Log AuthenData: ", authenData);

  if (authenData.status === Enumeration.HTTPStatusCode.Unauthorized) {
    return authenData;
  } else {
    // Lỗi 403 : Forbidden
    if (authenData.status === Enumeration.HTTPStatusCode.Forbidden) {
      return authenData;
    } else {
      // Data # {}
      const User = authjwt.db.collection("Users");
      const snapshot = await User.get();
      const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return list;
    }
  }
};

// create
UserService.createUserSevice = async (req) => {
  const user = req.body;
  const User = authjwt.db.collection("Users");
  await User.add(user);

  return user;
};

// update
UserService.updateUserSerivce = (req) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const user = moduleName.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  return user;
};

// Delete
UserService.deleteUserService = (req) => {
  const { id } = req.params;
  debugger;
  const filterIdUsers = moduleName.filter((user) => user.id !== id);

  return filterIdUsers;
};

// Xem chi tiết
UserService.getUserbyIdService = (req) => {
  const { id } = req.params;
  const docRef = db.collection("users").doc(id);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        return "Error";
      }
    })
    .catch((error) => {
      return error;
    });
  ``;
};

module.exports = UserService;
