const mongoose = require('mongoose');

const LocationDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    coords:{
        latitude: Number,
        latitudeDelta: Number,
        longitude: Number,
        longitudeDelta: Number
    }
});

mongoose.model('LocationData',LocationDataSchema);