const {Router}=require("express");
const indexRouter=Router();
const indexController=require("../controllers/indexController")

indexRouter.get("",indexController.messagesGet)
indexRouter.post("/new",indexController.sendMessagePost)
indexRouter.get("/open/:id",indexController.openMessageByIdGet)
indexRouter.get("/delete/:id",indexController.deleteMessageByIdGet)


module.exports=indexRouter;