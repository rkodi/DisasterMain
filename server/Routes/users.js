const express = require('express');
const router =  express.Router();
const bodyParser = require('body-parser');
const User = require('../Models/User');

const mongoose = require('mongoose');
mongoose.set('useFindAndModify',false)

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

//Post Method
router.post('/users',function(req,res,next){
    User.create(req.body,function(err,User){
        if(err) return next(err);
        res.json(User);
    });
});

//Get All Method
router.get('/users',function(req,res,next){
    User.find(function(err,User){
        if (err) return next(err);
        res.json(User);
    });
});

//Get By Id Method
router.get('/users/:id', function(req, res, next){
    User.findById(req.params.id, function(err, User){
        if (err) return next(err);
        res.json(User);
    })
})

//Update Method
router.put('/users/:id', function(req,res,next){
    User.findByIdAndUpdate(req.params.id,req.body,{new: true},function(err,User){
        if(err) return next(err);
        res.json(User);
    });
});

//Delete Method
router.delete('/users/:id', function(req,res,next){
    User.findByIdAndRemove(req.params.id,req.body, function(err,User){
        if(err) return next(err);
        res.json(User);
    });
});

module.exports = router;