const express = require('express');
const mongoose = require('mongoose');
const app = express();
const user = require('./models/user');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const findRoute = require('./routes/findRoute');

app.use(express.json());
app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/find', findRoute);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB connection successfull");
}).catch((e)=>{
    console.log("Error connecting to MongoDB");
    console.log(e);
});

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(3000, ()=>{
    console.log("Port is listening");
})