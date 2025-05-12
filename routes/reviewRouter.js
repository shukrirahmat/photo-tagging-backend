const {Router} = require("express");
const router = Router();
const reviewController = require("../controllers/reviewController.js")

router.get("/", reviewController.getReview);
router.post("/", reviewController.addReview);

module.exports = router;