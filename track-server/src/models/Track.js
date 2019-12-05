const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords:{
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
});

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // this means that userId is going to be a reference to some other object stored inside of MongoDB
        ref: 'User' //it tells that this userId is pointing at an instance of a user as was defined inside of our User.js file.
    },
    name: {
        type: String,
        default: '' // If somebody doesnt give a name to track default is going to be empty.
    },
    locations: [pointSchema]
});

mongoose.model('Track', trackSchema);