const express = require('express');
const router =  express.Router();
const bodyParser = require('body-parser');
const Timecard = require('../Models/Timecard');

const mongoose = require('mongoose');
mongoose.set('useFindAndModify',false)

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//Post Method
router.post('/timeCards',function(req,res,next){
    Timecard.create(req.body,function(err,Timecard){
        if(err) return next(err);
        res.json(Timecard);
    });
});

//Get All Method
router.get('/timeCards',function(req,res,next){
    Timecard.find(function(err,Timecard){
        if (err) return next(err);
        res.json(Timecard);
    });
});

//Get By Id Method
router.get('/timeCards/:id', function(req, res, next){
    Timecard.findById(req.params.id, function(err, Timecard){
        if (err) return next(err);
        res.json(Timecard);
    })
})

//Update Method
router.put('/timeCards/:id', function(req,res,next){
    Timecard.findByIdAndUpdate(req.params.id,req.body,{new: true},function(err,Timecard){
        if(err) return next(err);
        res.json(Timecard);
    });
});

//Delete Method
router.delete('/timeCards/:id', function(req,res,next){
    Timecard.findByIdAndRemove(req.params.id,req.body, function(err,Timecard){
        if(err) return next(err);
        res.json(Timecard);
    });
});

module.exports = router;