'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    detail: {
        type: String,
        Required: 'Please enter'
    },
    image: {
        type: String,
        Required: 'Please enter'
    },
    name: {
        type: String,
        Required: 'Please enter'
    }

})

// module.exports = mongoose.model('Users', UserSchema)
module.exports = mongoose.model('users', UserSchema)