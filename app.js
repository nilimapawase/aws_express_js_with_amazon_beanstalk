// var express=require("express");
// var app=express();

// var port=process.env.PORT || 9595;

// app.get("/",function(req,res){
// res.send(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         body{
//             background-color: blue;
//         }
//         h2{
//             color: red;
//         }
//         h6{
//             color:yellow;
//         }
//     </style>
// </head>
// <body>
//     <h2>Welcome</h2>
//     <h6>hi hello</h6>
// </body>
// </html>
// `)
// })

// app.get("/help",function(req,res){
// return res.send("Welcome to help page");
// })

// app.get("/api/first",function(req,res){
// return res.send({"msg":"welcome to square api"})
// })

// app.get("/api/square",function(req,res){
// var d=req.query.n;
// var s=d*d;
// console.log(d);
// var msg="Square of "+d+"="+s;
// return res.send({"result":msg})
// })

// app.get("/api/state",function(req,res){
// var states=[
// {"state_id":1,"state_name":"Maharashtra"},
// {"state_id":1,"state_name":"Maharashtra"}
// ];
// return res.send(states);
// })

// app.get("/api/student",function(req,res){
// var students=
// [
//   {
//     "studentId": 8,
//     "studentName": "Sagar",
//     "mobileNumber": "6786756560",
//     "city": "Nashik",
//     "emailAddress": "sagar@gmail.com"
//   },
//   {
//     "studentId": 9,
//     "studentName": "Dinesh",
//     "mobileNumber": "6756658768",
//     "city": "Pune",
//     "emailAddress": "dinesh@gmail.com"
//   },
//   {
//     "studentId": 10,
//     "studentName": "Sunil",
//     "mobileNumber": "9986756560",
//     "city": "Nashik",
//     "emailAddress": "sunil@gmail.com"
//   },
//   {
//     "studentId": 11,
//     "studentName": "Ajay Jadhav",
//     "mobileNumber": "09975751649",
//     "city": "Pune",
//     "emailAddress": "hr@ciitinstitute.com"
//   },
//   {
//     "studentId": 12,
//     "studentName": "Mahesh",
//     "mobileNumber": "768798766576",
//     "city": "Nashik",
//     "emailAddress": "mahesh@gmail.com"
//   },
//   {
//     "studentId": 13,
//     "studentName": "Meenal",
//     "mobileNumber": "8876654576",
//     "city": "Nagpur",
//     "emailAddress": "meenal@gmail.com"
//   },
//   {
//     "studentId": 14,
//     "studentName": "Poonam",
//     "mobileNumber": "88876565",
//     "city": "Pune",
//     "emailAddress": "poonam@gmail.com"
//   },
//   {
//     "studentId": 15,
//     "studentName": "Pooja",
//     "mobileNumber": "675456887",
//     "city": "Pune",
//     "emailAddress": "pooja@gmail.com"
//   },
//   {
//     "studentId": 16,
//     "studentName": "{{studentName}}",
//     "mobileNumber": "{{mobileNumber}}",
//     "city": "{{city}}",
//     "emailAddress": "{{emailAddress}}"
//   },
//   {
//     "studentId": 17,
//     "studentName": "heena",
//     "mobileNumber": "5345",
//     "city": "Mumbai",
//     "emailAddress": "heena@gmail.com"
//   },
//   {
//     "studentId": 18,
//     "studentName": "Tina",
//     "mobileNumber": "534545",
//     "city": "Goa",
//     "emailAddress": "Tinna@gmail.com"
//   },
//   {
//     "studentId": 19,
//     "studentName": "Arun",
//     "mobileNumber": "576576",
//     "city": "pune",
//     "emailAddress": "ghhg@gmail.com"
//   },
//   {
//     "studentId": 20,
//     "studentName": "maria",
//     "mobileNumber": "784678",
//     "city": "goa",
//     "emailAddress": "maria@gmail.com"
//   },
//   {
//     "studentId": 21,
//     "studentName": "prafull",
//     "mobileNumber": "3784588",
//     "city": "Mumbai",
//     "emailAddress": "praful1@gmail.com"
//   },
//   {
//     "studentId": 22,
//     "studentName": "minall",
//     "mobileNumber": "511345145",
//     "city": "Goa",
//     "emailAddress": "minal1@gmail.com"
//   },
//   {
//     "studentId": 23,
//     "studentName": "ajit",
//     "mobileNumber": "671177",
//     "city": "pune",
//     "emailAddress": "ajit@gmail.com"
//   },
//   {
//     "studentId": 24,
//     "studentName": "amay",
//     "mobileNumber": "341144",
//     "city": "goa",
//     "emailAddress": "amay@gmail.com"
//   },
//   {
//     "studentId": 25,
//     "studentName": "pranav",
//     "mobileNumber": "5677",
//     "city": "Mumbai",
//     "emailAddress": "pranav@gmail.com"
//   },
//   {
//     "studentId": 26,
//     "studentName": "megha",
//     "mobileNumber": "1111",
//     "city": "Goa",
//     "emailAddress": "megha@gmail.com"
//   },
//   {
//     "studentId": 27,
//     "studentName": "ajit1",
//     "mobileNumber": "1234",
//     "city": "pune",
//     "emailAddress": "ajit1@gmail.com"
//   }
// ];
// return res.send(students);
// })



// app.listen(port,function(){
// console.log("Connected...");
// })



var express=require("express");
var app=express();

var port=process.env.PORT || 9595;

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html")
})

app.listen(port, ()=>{
console.log("Connected...");
})