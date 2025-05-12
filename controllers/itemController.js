const asynchandler = require("express-async-handler");
const db = require("../db/queries");

const verifyCoordinate = asynchandler(async (req, res) => {
  const xpos = parseInt(req.query.xpos);
  const ypos = parseInt(req.query.ypos);
  const itemName = req.query.itemName;

  const item = await db.getItem(itemName);
  if (
    xpos >= item.xstart &&
    xpos <= item.xend &&
    ypos >= item.ystart &&
    ypos <= item.yend
  ) {
    return res.json({found: true, item});
  } else {
    return res.json({found: false});
  }
});

const getItemList = asynchandler(async (req, res) => {
  const itemList = [];
  const items = await db.getItemList();
  items.forEach((item) => {
    itemList.push(item.name)
  })

  return res.json(itemList);
})

module.exports = {
    verifyCoordinate,
    getItemList
}
