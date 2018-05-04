'use strict'
module.exports = function(app){
    var User = require('../controllers/userListController')


    app.route('/cities')
        .get(User.listAllCities)
        // .post(User.createAUser)

    // app.route('/users/:userId')
    //     .get(User.readAUser)
    //     .delete(User.deleteAUser)
    //     .post(User.updateAUser)


}