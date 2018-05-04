'use strict'
var mongoose = require('mongoose')
// User = mongoose.model('Users')
const User = mongoose.model('users')

exports.listAllUsers = function(req, res){
    var query = { sort: { firstName: 1 } }
    User.find({}, null, query, function(err, user){
        if(err) throw err
        // console.log(user)
        res.json(user)
    })
}
exports.listAllCities = function(req, res){
    let query1 = {  }


    User.find(query1, (err ,user) => {
        if(err) throw err
        console.log(user)
        res.json(user)
       
    })
    console.log("WTF")




}


exports.createAUser = function(req, res){
    // console.log(req.body)
    var newUser = new User(req.body)
    newUser.save(function(err, user){
        if(err) throw err
        res.json(user)
    })
}

exports.readAUser = function(req, res){
    //console.log(req.params.userId)
    User.findById(req.params.userId, function(err, user){
        if(err) throw err
        res.json(user)
    })
}

exports.deleteAUser = function(req, res){
    //console.log(req.params.userId)
    User.findByIdAndRemove(req.params.userId, function(err, user){
        if(err) throw err
        const response = {
            message: "Delete user id: "+ req.params.userId +" successfully",
            id: user._id
        }
        res.json(response)
    })
}

exports.updateAUser = function(req, res){
    console.log(req.body)
    // console.log(req.params.userId)
    var newUser = {}
    newUser = req.body
    // console.log(newUser)
    User.findByIdAndUpdate(req.params.userId, newUser, {new: true}, function(err, user){
        if(err) throw err
        // console.log(user)
        res.json(user)
    })
}

exports.check = function(req, res){
    let query = { firstName: 'mamegoma' }
    User.findOne(query, (err ,user) => {
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}