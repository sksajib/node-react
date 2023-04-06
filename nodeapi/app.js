const express=require('express')
const app=express()
const morgan = require('morgan')
const mongoose=require('mongoose')
const bodyParser=require("body-parser")
const expressValidator=require("express-validator")


const dotenv=require('dotenv')
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("DB CONNECTED"))
mongoose.connection.on("error",er=>{
	console.log("DB connection error",err.message)
});
const postRoutes=require("./routes/post.js")
const myownMiddleware=(req,res,next)=>{
	console.log("middleware applied!!")
	//for passing into the next phase after doing the job
	next();
}
app.use(morgan('dev'));
app.use(myownMiddleware)
app.use(bodyParser.json())
app.use(expressValidator())
app.use("/",postRoutes);
const port = process.env.PORT || 3003
app.listen(port,() => {
	console.log('A Node Js listening to port: ',port);
});
