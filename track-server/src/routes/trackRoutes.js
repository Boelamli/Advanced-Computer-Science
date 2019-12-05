const express = require('express');
const mongoose = require('mongoose');
const requireAuth =require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth); //Thats going to ensure that all the different request handlers that we attach to this router inside this file require the user to be signed in.

router.get('/tracks', async (req, res) => {
 const tracks = await Track.find(); //Find all of them.

 res.send(tracks);
});

router.post('/tracks', async (req, res) => {
    const {name, locations} = req.body;

    if(!name || !locations){
        return res.status(422).send({error: 'You must provide a name and locations'});
    }
    try{
        const track = new Track({name, locations, userId: req.user._id});
    await track.save();
    res.send(track);
    } catch (err){
        res.status(422).send({error: err.message})
    }
    
});

module.exports = router;