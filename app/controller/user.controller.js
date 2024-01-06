const User = require('../model/user.model');

exports.create = (req,res)=>{
    const newuser = new User({
        name : req.body.name,
    });
    User.create(newuser ,(err,data)=>{
        if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
        else 
        res.send(data);
    });


}