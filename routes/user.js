const express=require('express')
const usercontroller=require('../controller/usercontroller')
const router=express.Router();
router.get('/users',(req,res)=>{
    usercontroller.getUser(req,res)
})
router.get('/user/:id',(req,res)=>{
    usercontroller.getParCul(req,res);
})
module.exports=router;