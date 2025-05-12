const asynchandler = require("express-async-handler");
const db = require("../db/queries");

const getReview = asynchandler(async (req, res) => {
    const reviews = await db.getReview();
    res.json(reviews);
})

const addReview = asynchandler(async (req, res) => {
    const writer = req.body.username? req.body.username : "Anonymous";
    const content = req.body.content
    const review = await db.addReview(writer, content, new Date());
    res.json(review);
})

module.exports = {
    getReview,
    addReview
}