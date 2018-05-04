'use strict'
var mongoose = require('mongoose')
// User = mongoose.model('Auth')
const User = mongoose.model('auths')


exports.check = function(req, res){
    console.log(req.body)
    // var query = { sort: { Id: 'joeyinwza' } }
    // let query = { email: 'joeyinwza' }
    // console.log(query)
    // User.findOne(query, (err ,user) => {
    //     if(err) throw err
    //     console.log(user)
    //     res.json(user)
    // })
}


exports.check2 = function(req, res){
    // console.log("wtf")
    // console.log(req.body)
    // var query = { sort: { Id: 'joeyinwza' } }

    let query = { email: req.body.email }
    console.log(query)
    User.findOne(query, (err ,user) => {
        if(err) throw err
        console.log(user)
        if (req.body.password == user.password) {
            res.json("Okay!")
        }
        
    })
}

exports.createAUser = function(req, res){
    // console.log(req.body)
    var newUser = new User(req.body)
    newUser.save(function(err, user){
        if(err) throw err
        res.json(user)
    })
}

