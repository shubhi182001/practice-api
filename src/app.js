const express = require("express");
require("./db/conn");
const MensRanking = require("./models/mens");

const app = express();
const port = process.env.PORT || 3000;

app.get("/",async (req, res) => {
    console.log("Hello from shubhi");
    res.send("hello from shubhi");
})

app.listen(port, () => {
    console.log(`connection is successful at port number ${port}`);

})