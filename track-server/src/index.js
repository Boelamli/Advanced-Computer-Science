require('./models/User'); //These three here because we want call them at least once before using them.
require('./models/Track');
require('./models/LocationData');
require('./models/PointData');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const LocationRoutes = require('./routes/locationRoutes');
const requireAuth = require('./middlewares/requireAuth');


const app = express();

app.use(bodyParser.json()); //This one should be called first otherwise express api first request authRoutes before any data get parsed.
app.use(authRoutes);
app.use(trackRoutes);
app.use(LocationRoutes);

const  mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-u4fu8.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});


mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo instance');
});

mongoose.connection.on('error', (err) =>{
    console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => { // In the middle requireAuth checks and validate the user than allow to continue to request.
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 