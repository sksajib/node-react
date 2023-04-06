//console.log("Process: ",process)
const {sum,sum2}=require("./helpers")
const express=require("express") //server 2
const https=require("http") //server 1
const total=sum2(9,8)
//Server 1
const server=https.createServer((req,res)=>{
	res.end("PURBA my love");
})
server.listen(3010)
//Server 2
console.log("Total: ",total)
const app=express()
app.get('/',(req,res)=>{
	res.send("I Love my Purba ummmmahhh")
})
app.listen(3020)