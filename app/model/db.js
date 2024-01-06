const dbConfig = require('../config/db.config');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : dbConfig.HOSTNAME,
  user :dbConfig.USERNAME,
  password : dbConfig.PASSWORD,
  database : dbConfig.DATABSE
});

connection.connect((error)=>{
  if(error) throw error ;
  console.log("successfully connected to database");
});
module.exports =connection ;