const UserService = require("../../services/users/userService.js");
const Enumeration = require("../../enumeration/conmon");
const HandleAPIError = require("../../exceptions/httpException");
const UserController = {};

/**
 * Lấy danh sách thông tin người dùng
 * @param {*} req
 * @param {*} res
 * CreateBy: NVDuc
 */
UserController.getAllUserController = async (req, res) => {
  try {
    const users = await UserService.getAllUserSevice(req);
    if (users.status === Enumeration.HTTPStatusCode.Unauthorized) {
      HandleAPIError.ErrorUnauthorized(res);
    } else {
      if (users.status === Enumeration.HTTPStatusCode.Forbidden) {
        HandleAPIError.ErrorForbidden(res);
      } else {
        res.status(Enumeration.HTTPStatusCode.Ok).json({
          success: true,
          users: users,
        });
      }
    }
  } catch (error) {
    HandleAPIError.ErrorBadRequest(error, res);
  }
};

/**
 * Xem chi tiết user
 * @param {*} req
 * @param {*} res
 */
UserController.getUserByIdController = (req, res) => {
  try {
    const data = getUserbyIdService(req);
    res.status(200).json({
      user: data,
    });
  } catch (error) {
    res.status(400);
  }
};

/**
 * Thêm user
 * @param {*} req
 * @param {*} res
 */
UserController.createUserController = async (req, res) => {
  try {
    const user = await UserService.createUserSevice(req);
    res.status(200).json({
      user: user,
      message: "Success",
    });
  } catch (error) {
    res.status(400);
  }
};

/**
 * Update user
 * @param {*} req
 * @param {*} res
 */
UserController.updateUserController = (req, res) => {
  try {
    const data = updateUserSerivce(req);
    res.status(200).json({
      user: data,
    });
  } catch (error) {
    res.status(400);
  }
};

/**
 * Delete user by id
 * @param {*} req
 * @param {*} res
 */
UserController.deleteUserController = (req, res) => {
  try {
    const data = deleteUserService(req);
    res.status(200).json({
      user: data,
    });
  } catch (error) {
    res.status(400);
  }
};

module.exports = UserController;
