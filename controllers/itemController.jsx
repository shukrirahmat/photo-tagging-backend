const asynchandler = require("express-async-handler");
const db = require("../db/queries");

const verifyCoordinate = asynchandler(async (req, res) => {
  const xpos = parseInt(req.body.xpos);
  const ypos = parseInt(req.body.ypos);
  const itemName = req.body.itemName;

  const item = await db.getItem(itemName);
  if (
    xpos >= item.xstart &&
    xpos <= item.xend &&
    ypos >= item.ystart &&
    ypos <= item.yend
  ) {
    return res.json({found: true, xstart: item.xstart, xend: item.xend, ystart: item.ystart, yend: item.yend});
  } else {
    return res.json({found: false});
  }
});

const getItemList = asynchandler(async (req, res) => {
  const itemList = await db.getItemList();
  return res.json(itemList);
})

module.exports = {
    verifyCoordinate,
    getItemList
}
