module.exports = app =>{
const userController = require('../controller/user.controller');
const venuesController = require('../controller/venues.controller');
var router = require('express').Router();

router.get("/ganesh/pk",(req,res)=>{
   res.json("Ganesh");
})

router.post("/" , userController.create);

router.get('/venue/:id', venuesController.getVenuesList);
router.get('/venue', venuesController.getVenuesList);
router.post('/create', venuesController.createVenue);


  
app.use("/api",router);
}
