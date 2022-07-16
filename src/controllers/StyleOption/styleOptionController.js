const StyleOptionService = require("../../services/StyleOption/styleOptionService.js");

const StyleOptionController = {};

StyleOptionController.getAllStyleOptionController = async (req, res) => {
  try {
    const styleOptions = await StyleOptionService.getAllStyleOptionService();
    res.status(200).json({
      styleOptions: styleOptions,
    });
  } catch (error) {}
};

StyleOptionController.createStyleOptionController = async (req, res) => {
  try {
    console.log("object");
    const styleOption = await StyleOptionService.createStyleOptionService(req);
    res.status(200).json({
      styleOption: styleOption,
      message: "Success",
    });
  } catch (error) {
    res.status(400);
  }
};

module.exports = StyleOptionController;
