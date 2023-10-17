const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
     // get user by id
     app.get('/users', UserController.index,UserController.index)

     // create user
     app.post('/user', UserController.create)

     // edit user, suspend, active
     app.put('/user/:userId', UserController.put)

     // delete user
     app.delete('/user/:userId', UserController.delete)

     // get all user
     app.get('/user/:userId', UserController.show)

     // login
     app.post('/login', UserAuthenController.login)


}   