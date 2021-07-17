const express = require('express');
const Items = require('../../Items');
const router = express.Router();

//Items Model
const Item = require('../../Items');

//router POST api/items
//desc CReate a post
//access Public

router.post ('/',(req,res)=>{
   const newItem = new Items({
       name:req.body.name
   });

   newItem.save().then(items=>res.json(item));
});


//router DELETE api/items/:id
//desc DLETE Item
//access Public

router.delete ('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=>res.json({success:true}))
    ) .catch(err =>res.status(404).json({success:false}));
    });
 
module.exports = router