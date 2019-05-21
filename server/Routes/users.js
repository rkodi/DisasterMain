const express = require('express');
const router =  express.Router();
const bodyParser = require('body-parser');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

//user sign up
router.post('/signup', function (req, res) {
    var saltRounds = 0;
    console.log(req.body);
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        if(err){
            return res.status(500).json({
                error: err
            });
        }else{
            const user = new User({
                email:req.body.email,
                password:hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                role: req.body.role
            });
            user.save().then(function(result){
                console.log(result);
                res.status(200).json({
                    success: "new user created",
                    role: req.body.role
                });

            }).catch(err =>{
                res.status(500).json({
                    error: err
                });
            });
        }
    });
    
});

//user sign in
router.post('/signin', function(req, res){
    User.findOne({email:req.body.email})
    .then(function(user){
        bcrypt.compare(req.body.password, user.password, function(err, result){
            if(err){
                return res.status(401).json({
                    failed: 'Unaouthorized Access'
                });
            }

            if(result){
                const JWTToken = jwt.sign({
                    email: user.email,
                    _id: user._id
                },
                'secret',
                {
                    expiresIn: '7h'
                });

                return res.status(200).json({
                    success: 'welcome to the JWT Auth',
                    token: JWTToken,
                    user: user
                });                
            }
            return res.status(401).json({
                failed: 'Unauthorized Access'
            });
        });
    }).catch(err =>{
        res.status(500).json({
            error: err
        });
    });
});

router.post('/posts', verifyToken, (req, res) =>{
    jwt.verify(req.token,'secret', (err, authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                msg:"a new post is created",
                authData
            });
        }
    });
});


function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports = router;