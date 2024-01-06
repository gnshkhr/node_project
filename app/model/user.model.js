const sql = require('./db');

const User = function(user){
    this.name = user.name ;
}

User.create = (newUser,result)=>{

    // let query = "INSERT INTO tb_vendor_user SET = ?";

    sql.query( "INSERT INTO tb_vendor_user SET ?" ,newUser,(err,res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null,{id : res.insertId,...newUser})  ;
    })

}

module.exports = User ;