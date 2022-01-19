const express = require('express')
const constants = require('./src/utils/constants')

const app = express()

const port = 8080

// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json())
// parse requests of application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))

const userRouter = require('./src/routers/user-router')

app.use(constants.API + constants.VERSION_1 + '/users', userRouter)

app.listen(port, () => {
    console.log(`Express Sequelize app listening at http://localhost:${port}`)
})