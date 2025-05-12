const {Router} = require("express");
const router = Router();
const rankingController = require("../controllers/rankingController.js")

router.get("/", rankingController.getRanking);
router.post("/", rankingController.addNewRanking);

module.exports = router;