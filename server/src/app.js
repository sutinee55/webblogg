let express = require('express')
let bodyParser = require('body-parser')
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./routes')(app)

app.get('/status', function (req,res){
    res.send('Hello nodejs server belong to sutunee')
})

app.get('/hello/:name', function (req,res) {
    console.log('hello - ' + req.params.name)
    res.send('sey hello with ' + req.params.name)
   })

   app.get('/user/:userId', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน'+ req.params.userId)
   })

   app.get('/user/:users', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน')
   })

   app.post('/user/', function (req, res) {
    res.send('สร้างผู้ใช้งาน' + JSON.stringify(req.body))
   })

   app.put('/user/:userId', function (req, res) {
    res.send('แก้ไขข้อมูลผู้ใช้' + req.params.userId + ' : ' +
   JSON.stringify(req.body.name))
   })

   app.delete('/user/:userId', function (req, res) {
    res.send('ลบผุ้ใช้งาน' + req.params.userId + ' : ' + 
    JSON.stringify(req.body.name))
})

let port = process.env.PORT || config.port

sequelize.sync({force: false}).then(() => {
    app.listen(port, function () {
    console.log('Server running on ' + port)
    })
})

app.listen(port, function(){
    console.log('server running on ' + port)
})
