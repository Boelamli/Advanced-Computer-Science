const express = require('express');
const mongoose = require('mongoose');
const requireAuth =require('../middlewares/requireAuth');

const locationData = mongoose.model('LocationData');
const pointData = mongoose.model('PointData');

const router = express.Router();

//router.use(requireAuth); //Thats going to ensure that all the different request handlers that we attach to this router inside this file require the user to be signed in.

router.get('/locationData', async (req, res) => {
    const userData = await locationData.find({userId: req.user._id});

 res.send(userData);
});

router.post('/locationData', async (req, res) => {
    const {coords} = req.body;

    if(!coords){
        return res.status(422).send({error: 'You must provide coordinations'});
    }
    try{
        const houseData = new pointData({Latitude: 1, Longitude: 1, Postcode: BN, AVG_Price: 1});
        const userData = new locationData({userId: req.user._id, coords});
    await userData.save();
    res.send(houseData);
    //res.send('A bunch of points array');
    //res.send(userData); // Here it will come the BN Code database results
    } catch (err){
        res.status(422).send({error: err.message})
    }
    
});

router.post('/locationData2', async (req, res) => {
    const {coords} = req.body;

    if(!coords){
        return res.status(422).send({error: 'You must provide coordinations'});
    }
    try{
        const userData = new locationData({userId: req.user._id, coords});
        await userData.save();
        const houseData = await pointData.find();
        res.send(houseData);

        //res.send('A bunch of points array');
        //res.send(userData); // Here it will come the BN Code database results
    } catch (err){
        res.status(422).send({error: err.message})
    }

});

router.get('/locationData2', async (req, res) => {
    const houseData = await pointData.find(); //Find all of them.
    res.send(houseData);
});

module.exports = router;