const fs=require('fs')
const fileName="file.txt" 
const data=fs.readFileSync(fileName)
console.log(data.toString())
console.log('synch data: ')

const errHandler=err=>console.log(err)
const datahandler=data=>console.log(data.toString())
fs.readFileSync(fileName,(errHandler,datahandler))
fs.readFileSync(fileName,(err,data)=>{
	if(err)
		errHandler(err)
	datahandler(data)
})