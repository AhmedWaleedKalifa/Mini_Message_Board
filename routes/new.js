const {Router}=require("express");
const newRouter=Router();
newRouter.get("/",(req,res)=>{
    res.render("newForm")
})
// newRouter.post("/",(req,res)=>{
//     const name=req.body.authorName;
//     const message=req.body.message;
//     messages.push({})
//     res.redirect("/");
// })
module.exports=newRouter