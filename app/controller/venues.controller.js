const venuesModel = require('../model/venues.model');

module.exports.getVenuesList = (req,res)=>{
    const id = req.query.id ;
    venuesModel.getVenueList(id)
    .then((result)=>res.json(result))
    .catch((err)=>res.json(err))
}

module.exports.createVenue = (req,res)=>{
    const listing = new venuesModel({
        list_reference_id : req.body.list_reference_id ,
        name : req.body.name
    })
    // res.send(listing);
    venuesModel.createVenues(listing)
    .then((result)=>res.json(result))
    .catch((err)=>res.json(err))
}