module.exports = {
// get all user
    index(req, res) {
        res.send('ดูข้อมูลผู้ใช้ทั้งหมด')
       },

// create user
       create(req, res) {
        res.send('สร้างผู้ใช้งาน' + JSON.stringify(req.body))
       },
// edit user, suspend, active
       put(req, res) {
        res.send('แก้ไขข้อมูลผู้ใช้' + req.params.userId + " : " +JSON.stringify(req.body.name))
       },
// delete user
       delete(req, res) {
    res.send('ลบข้อมูลผุ้ใช้' + req.params.userId + " : " + JSON.stringify(req.body.name))
    },
// get user by id
     show (req, res) {
       res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId + " : " + JSON.stringify(req.body))
    }
   }

