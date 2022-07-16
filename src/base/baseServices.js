const authjwt = require("../config/config.js");

const BaseServices = {};

/**
 * get All entity
 * @param {*} entityName
 * @returns
 * CreateBy:01/07 - ducnv
 */
BaseServices.getAllEntitysService = async (entityName) => {
  const nameDB = `${entityName}`;
  const entitys = authjwt.db.collection(nameDB.toString());
  const listEntitys = await entitys.get();
  const datas = listEntitys.docs.map((doc) => ({ ...doc.data() }));
  return datas;
};

/**
 * get by Id
 * @param {*} entityParam
 * @returns
 * CreateBy: 01/07 - ducnv
 */
BaseServices.getEntityByIdService = async (entityParam) => {
  let dataParam = {};
  const entityName = entityParam.entityName;
  const entityId = entityParam.entityId;
  const entityParamDB = authjwt.db
    .collection(entityName.toString())
    .doc(entityId);
  await entityParamDB.get().then((paramDB) => {
    dataParam = paramDB.data();
  });
  return dataParam;
};

/**
 * Create entity
 * @param {*} req
 * @param {*} res
 * @returns
 * CreateBy: 01/07 - ducnv
 */
BaseServices.createEntityService = async (req, res) => {
  const entityName = req.params.entityName;
  const entityBody = req.body;

  const entityDB = authjwt.db.collection(entityName.toString());
  await entityDB.add(entityBody);

  return entityBody;
};

/**
 * Delete entity
 * @param {*} req
 * @returns
 * CreateBy: 01/07 - ducnv
 */
BaseServices.deleteEntityService = async (req) => {
  const entityId = req.params.entityId;
  const entityName = req.params.entityName;
  const entityDB = authjwt.db.collection(entityName.toString()).doc(entityId);

  const query = { id: entityId };

  const result = await entityDB
    .delete()
    .then(() => {
      return query;
    })
    .catch((error) => {
      return er;
    });
  return query;
};

/**
 * Update entity
 * @param {*} req
 * @returns
 * CreateBy: 01/07 - ducnv
 */
BaseServices.updateEntityService = async (req) => {
  const entityId = req.params.entityId;
  const entityName = req.params.entityName;
  const entityBody = req.body;
  const entityDB = authjwt.db.collection(entityName.toString()).doc(entityId);

  const resEntity = await entityDB.update(entityBody);
  return resEntity;
};
module.exports = BaseServices;
