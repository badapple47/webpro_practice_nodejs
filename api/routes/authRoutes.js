'use strict'
module.exports = function(app){
   
    var Auth = require('../controllers/authenController')


    app.route('/authen')
        .post(Auth.check2)

    app.route('/authen/createAUser')
        .post(Auth.createAUser)


}