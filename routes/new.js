const {Router}=require("express");
const newRouter=Router();
newRouter.get("/",(req,res)=>{
    res.render("newForm")
})

module.exports=newRouter