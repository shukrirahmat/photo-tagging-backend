const asynchandler = require("express-async-handler");
const db = require("../db/queries");

const getRanking = asynchandler(async (req, res) => {
    const rankings = await db.getRanking();
    res.json(rankings);
})

const getComments = asynchandler(async (req, res) => {
    const comments = await db.getComments();
    res.json(comments);
})

const addNewRecords = asynchandler(async (req, res) => {
    const username = req.body.username? req.body.username : null
    const time = parseFloat(req.body.time);
    const comment = req.body.comment? req.body.comment: null
    const record = await db.addRecord(time, username, comment, new Date());
    res.json(record);
})

module.exports = {
    getRanking,
    getComments,
    addNewRecords

}