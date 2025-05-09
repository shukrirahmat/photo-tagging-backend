const {Router} = require("express");
const router = Router();
const itemController = require("../controllers/itemController.jsx")

router.get("/", itemController.verifyCoordinate);

module.exports = router;