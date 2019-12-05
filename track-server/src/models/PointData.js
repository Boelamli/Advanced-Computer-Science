const mongoose = require('mongoose');

const PointDataSchema = new mongoose.Schema({
    Latitude: Number,
    Longitude: Number,
    Postcode: String,
    AVG_Price: Number
});

mongoose.model('PointData',PointDataSchema);

