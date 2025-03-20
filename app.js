require("dotenv").config();
const express=require("express");
const app=express();
const path=require("node:path");
const indexRouter=require("./routes/index");
const newRouter = require("./routes/new");
const port=process.env.PORT;
const assetsPath=path.join(__dirname,"public");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true }));

app.use("/",indexRouter);
app.use("/new",newRouter)

app.listen(port,()=>{
    console.log(`the server running at http://localhost:${port}`);
})