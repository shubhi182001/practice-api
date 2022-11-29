const express = require("express");
require("./db/conn");
const MensRanking = require("./models/mens");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

//post request:
app.post("/mens" , async(req, res) => {
    try{
        const addMensRecord = new MensRanking(req.body);
        console.log(req.body);
        const insertMen = await addMensRecord.save();
        res.status(201).send(insertMen);
    }
    catch(e){
        res.status(400).send(e);
    }
})
  
app.listen(port, () => {
    console.log(`connection is successful at port number ${port}`);
})