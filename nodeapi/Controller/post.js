
const Post=require("../models/post.js")
exports.getPosts=(req,res)=>{
	const posts=Post.find()
	.select("_id title body")
	.then(posts=>{
		res.status(200).json({posts:posts})
		
	})
	.catch(err=>console.log(err))
	// res.json({
	// 	posts:[
	// 			{title:'first post'},{title:'second post'}
	// 		]
	// })
}
exports.createPost=(req,res)=>{
	const post=new Post(req.body)
	console.log("creating Post:",req.body)
	post.save().then((result)=>{
		// if(err){
		// 	return res.status(400).json({
		// 		error:err
		// 	})
		// } 
		// res.status(200).json({
		// 	post:result
		// });
		res.status(200).json({
			post:result
		})
	})
}