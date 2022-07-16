const authjwt = require("../../config/config.js");

const StyleOptionService = {};

/**
 * Lấy danh sách các option mục Phong cách
 * @returns
 */
StyleOptionService.getAllStyleOptionService = async () => {
  const styleOption = authjwt.db.collection("Interests");
  const snapshot = await styleOption.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return list;
};

/**
 * Thêm 1 style cho danh mục
 * @param {*} req
 * @returns
 */
StyleOptionService.createStyleOptionService = async (req) => {
  const styleObject = req.body;
  console.log(styleObject);
  const styleOption = authjwt.db.collection("Interests");
  await styleOption.add(styleObject);

  return styleObject;
};

module.exports = StyleOptionService;
