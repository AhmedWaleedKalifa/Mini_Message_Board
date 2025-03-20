const {Router}=require("express");
const indexRouter=Router();
const messages=[
    {
        text:"hello",
        user:"Ahmed",
        date:new Date()
    },
    {
        text:"bye",
        user:"Mohamed",
        date:new Date()
    },
    {
        text:"welcome here",
        user:"Hassan",
        date:new Date()
    }
]
async function getMessageById(id) {
    return messages.find(message=>message.id===id)   
}

indexRouter.get("",(req,res)=>{
    res.render("index",{messages:messages});
})
indexRouter.post("/new",(req,res)=>{
    const name=req.body.authorName;
    const message=req.body.message;
    messages.push({
        text:message,
        user:name,
        date:new Date()
    })
    res.redirect("/");
})
indexRouter.get("/message/:id",(req,res)=>{
    const id=req.params.id;
    const message=messages[id]
    res.render("messageDetails",{message:message})
})

module.exports=indexRouter;