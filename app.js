const express=require("express");
const app=express();
const path=require("path");
const ejsMate=require("ejs-mate");
let port =8080;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "/views"));
app.engine("ejs", ejsMate);

app.get("/" ,(req, res) =>{
    res.render("index.ejs");
})
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});