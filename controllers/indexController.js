
const db=require("../db/queries")
async function messagesGet(req,res){
    const messages= await db.getAllMessages();
    res.render("index",{messages:messages});
}
 async function sendMessagePost(req,res){
    const username=req.body.username;
    const text=req.body.text;
    const date=String(new Date());
    await db.insertMessage(text,username,date)
    res.redirect("/");
}
async function openMessageByIdGet(req,res){
    const id=req.params.id;
    const message=await db.getMessageById(id);

    if(!id |!message){
        res.status(404).send("Message not found");
    }
    res.render("messageDetails",{message:message})
}
async function deleteMessageByIdGet(req,res){
    const id=req.params.id;
    const messages= await db.getAllMessages();
    if(!id |!messages.length){
        res.status(404).send("Message not found");
    }
    await db.deleteMessageById(id);
    res.redirect("/")
}

module.exports={
    messagesGet,
    sendMessagePost,
    openMessageByIdGet,
    deleteMessageByIdGet
}