const asynchandler = require("express-async-handler");
const db = require("../db/queries");

const getRanking = asynchandler(async (req, res) => {
    const rankings = await db.getRanking();
    res.json(rankings);
})

const addNewRanking = asynchandler(async (req, res) => {
    const username = req.body.username;
    const time = parseFloat(req.body.time)
    const ranking = await db.addRanking(username, time, new Date());
    res.json(ranking);
})

module.exports = {
    getRanking,
    addNewRanking
}