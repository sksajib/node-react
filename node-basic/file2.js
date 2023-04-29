const fs =require('fs')
const fileName="file.txt" 
fs.watch(fileName,()=>console.log('File Chaged'))
fs.readFile(fileName,(err,data)=>{
	if (err){
		consoloe.log(err);
	}
	console.log(data.toString())
})
console.log('First')
console.log('Node js async programming....?')
//asynchronous model