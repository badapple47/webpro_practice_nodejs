'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    email: {
        type: String,
        Required: 'Please enter'
    },
    password: {
        type: String,
        Required: 'Please enter'
    }

})

// module.exports = mongoose.model('Auth', UserSchema)
module.exports = mongoose.model('auths', UserSchema)

