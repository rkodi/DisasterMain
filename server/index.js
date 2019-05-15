const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jobs = require('./Routes/jobs');
const machines = require('./Routes/machines')
const timecards = require('./Routes/timeCards')
//const users = require('./routes/user.route')
const cors = require('cors');

app.use(cors());
app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.send('cors problem fixed:)');
});
app.use("/", jobs)
app.use("/",machines)
app.use("/",timecards)

const db = 'mongodb://localhost:27017/disaster';
mongoose.connect(db, { useNewUrlParser: true },err =>{
    if(err){
        console.log('Error! '+ err);
    }
    else{
        console.log('Connected to mongodb');
    }
})


app.get('/',(req,res)=>{
    res.send('Default Route');
});

const port = 4000;
app.listen(port,() => console.log("listening on port " + port));