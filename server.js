const express       = require('express')
const mongoose      = require('mongoose')
const bodyParser    = require('body-parser')

app = express()
port = process.env.PORT || 8082

User = require('./api/models/userListModel')


Auth = require('./api/models/authModel')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Practice', (err) => {
    if (err) throw err
    console.log('Successfully connected.')
})

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

const routes = require('./api/routes/userListRoutes')
const authRoutes = require('./api/routes/authRoutes')

routes(app)
authRoutes(app)

app.listen(port)
console.log('Server started on: ' + port);
