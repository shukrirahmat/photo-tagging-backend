const express = require("express");
const cors = require("cors");
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: true }));


//ROUTES
app.get("/", (req, res) => {
    res.send("HELLO WORLD");
})


//CONNECTING
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});