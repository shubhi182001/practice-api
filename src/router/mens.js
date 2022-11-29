const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")

//post request:
router.post("/mens" , async(req, res) => {
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

//get request:
router.get("/mens" , async(req, res) => {
    try{
        const getMens = await MensRanking.find({}).sort({"ranking": 1});
        res.status(200).send(getMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//getting individual's data:
router.get("/mens/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById({_id: _id})
        res.send(getMen);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//patch request:
router.patch("/mens/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const updateMen = await MensRanking.findByIdAndUpdate({_id: _id}, req.body, {
            new:true
        });
        console.log(updateMen)
        res.send(updateMen);    
    }
    catch(e){
        res.status(500).send(e);
    }
})

//delete request:
router.delete("/mens/:id" , async(req, res) => {
    try{
        const _id = req.params.id;
        const deleteMen = await MensRanking.findByIdAndDelete({_id:_id});
        res.status(200).send("deleted");
    }
    catch(e) {
        console.log(e);
    }
})


module.exports = router