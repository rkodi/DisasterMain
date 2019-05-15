const express = require('express');
const router =  express.Router();
const bodyParser = require('body-parser');
const Job = require('../Models/Job');

const mongoose = require('mongoose');
mongoose.set('useFindAndModify',false)

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//Post Method
router.post('/jobs',function(req,res,next){
    Job.create(req.body,function(err,Job){
        if(err) return next(err);
        res.json(Job);
    });
});

//Get All Method
router.get('/jobs',function(req,res,next){
    Job.find(function(err,Job){
        if (err) return next(err);
        res.json(Job);
    });
});

//Get By Id Method
router.get('/jobs/:id', function(req, res, next){
    Job.findById(req.params.id, function(err, Job){
        if (err) return next(err);
        res.json(Job);
    })
})

//Update Method
router.put('/jobs/:id', function(req,res,next){
    Job.findByIdAndUpdate(req.params.id,req.body,{new: true},function(err,Job){
        if(err) return next(err);
        res.json(Job);
    });
});

//Delete Method
router.delete('/jobs/:id', function(req,res,next){
    Job.findByIdAndRemove(req.params.id,req.body, function(err,Job){
        if(err) return next(err);
        res.json(Job);
    });
});

module.exports = router;