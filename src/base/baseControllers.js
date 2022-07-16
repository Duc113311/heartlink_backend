const BaseServices = require("../../src/base/baseServices.js");

const BaseController = {};

/**
 * Get All Entity
 * @param {*} req
 * @param {*} res
 * CreateBy: 01/07 - ducnv
 */
BaseController.getAllEntitysController = async (req, res) => {
  try {
    const entityParam = req.params.entityName;
    const listEntitys = await BaseServices.getAllEntitysService(entityParam);
    res.status(200).json({
      users: listEntitys,
    });
  } catch (error) {}
};

/**
 * Get By Id Entity
 * @param {*} req
 * @param {*} res
 * CreateBy: 01/07 - ducnv
 */
BaseController.getEntityByIdController = async (req, res) => {
  try {
    const entityParam = req.params;
    const paramEntity = await BaseServices.getEntityByIdService(entityParam);
    res.status(200).json({
      user: paramEntity,
    });
  } catch (error) {}
};

/**
 * Create entity
 * @param {*} req
 * @param {*} res
 * CreateBy: 01/07 - ducnv
 */
BaseController.createEntityController = async (req, res) => {
  try {
    const paramEntity = await BaseServices.createEntityService(req);
    res.status(200).json({
      user: paramEntity,
      message: "Success",
    });
  } catch (error) {}
};

/**
 * delete entity
 * @param {*} req 
 * @param {*} res 
 * CreateBy: 01/07 - ducnv
 */
BaseController.deleteEntityController = (req, res) => {
  try {
    const entityId = BaseServices.deleteEntityService(req);

    res.status(200).json({
      data: entityId,
      message: "Success",
    });
  } catch (error) {
    res.status(400);
  }
};

/**
 * Update entity
 * @param {*} req 
 * @param {*} res 
 * CreateBy: 01/07 - ducnv
 */
BaseController.updateEntityController= (req, res) => {
    try {
      const entityId = BaseServices.updateEntityService(req);
  
      res.status(200).json({
        data: entityId,
        message: "Success",
      });
    } catch (error) {
      res.status(400);
    }
  };

module.exports = BaseController;
