if(process.env.NODE_ENV!=="production"){
    require("dotenv").config();
}
require("./database");

const express=require("express");
const config=require("./server/config");
const app=config(express());

app.listen(app.get("port"),()=>{
    console.log("Servidro en : ",app.get("port"));
});