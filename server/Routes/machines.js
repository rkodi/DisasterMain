const express = require('express');
const router =  express.Router();
const bodyParser = require('body-parser');
const Machine = require('../Models/Machine');

const mongoose = require('mongoose');
mongoose.set('useFindAndModify',false)

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//Post Method
router.post('/machines',function(req,res,next){
    Machine.create(req.body,function(err,Machine){
        if(err) return next(err);
        res.json(Machine);
    });
});

//Get All Method
router.get('/machines',function(req,res,next){
    Machine.find(function(err,Machine){
        if (err) return next(err);
        res.json(Machine);
    });
});

//Get By Id Method
router.get('/machines/:id', function(req, res, next){
    Machine.findById(req.params.id, function(err, Machine){
        if (err) return next(err);
        res.json(Machine);
    })
})

//Update Method
router.put('/machines/:id', function(req,res,next){
    Machine.findByIdAndUpdate(req.params.id,req.body,{new: true},function(err,Machine){
        if(err) return next(err);
        res.json(Machine);
    });
});

//Delete Method
router.delete('/machines/:id', function(req,res,next){
    Machine.findByIdAndRemove(req.params.id,req.body, function(err,Machine){
        if(err) return next(err);
        res.json(Machine);
    });
});

module.exports = router;