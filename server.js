const express = require('express');
const cors = require('cors');
const app = express();
var corsOptions = {
    origin : "http://localhost/8081" ,
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./app/route/user.routes')(app);

const PORT = process.env.port || 8080 ;
app.listen(PORT,()=>{
    console.log("Ganesh App is running"+`${PORT}`);
})

app.get('/',(req,res)=>{
    res.json("HEY WE ARE HERE");
})