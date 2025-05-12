const {Router} = require("express");
const router = Router();
const recordsController = require("../controllers/recordsController.js")

router.get("/rankings", recordsController.getRanking)
router.get("/comments", recordsController.getComments)
router.post("/", recordsController.addNewRecords);

module.exports = router;