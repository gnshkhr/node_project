const sql = require('../model/db');
const Venues = function(venues){
     this.list_reference_id =venues.list_reference_id  ;
     this.name = venues.name;
};
Venues.getVenueList = (id)=>{
    const newPromise = new Promise((resolve,reject)=>{
        let query = "select * from listing" ;
            if(id)
            query += ` where id = ${id}`;
            
            // if (title) {
            //     query += ` WHERE title LIKE '%${title}%'`;
            // }
            sql.query(query,(err,result)=>{
            err ?
            reject({resCode: -1, errCode: err.errno, errMsg: err.sqlMessage}):
            resolve((result.length == 0) ? {resCode: 1, msg: 'Venues not Found', data:result}:
                {resCode: 1, msg: 'Venues Found', data:result});

        })
    });

    return newPromise ;

}
Venues.createVenues = (newVenue)=>{
    const newPromise = (resolve,reject)=>{
        let query = "INSERT INTO  OUTPUT @@Identity listing SET ?";
        sql.query(query,newVenue ,(err,result)=>{
            err ?
            reject({resCode:-1,errCode: err.errno ,errMsg : err.sqlMessage}) :
            resolve({resCode:1,message: "Data Inserted" ,data : result.insertId})
        })
    }
    return newPromise;

  }
module.exports = Venues ;
