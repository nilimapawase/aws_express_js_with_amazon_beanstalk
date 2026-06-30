var express=require("express");
var app=express();
var mysql=require("mysql2");
var port=process.env.PORT || 9595;

var con=mysql.createConnection({
host:"db.cpkqm80282t1.ap-south-1.rds.amazonaws.com",
user:"awsadmin",
password:"Nilima#2927",
database:"collegedb",
port:3309
});

app.get("/api/student",(req,res)=>{
con.connect(function(err){
if(err) throw err;
con.query("select * from students",(err,result)=>{
if(err) throw err;
return res.send(result);
})
})
})

app.listen(port,function(){
console.log("Connected...");
})