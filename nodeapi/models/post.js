const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
	title:{
		type:String,
		required:"Title is required"
		//if want to set length of the title of the post uncomment below 2 lines
		// minlength:4,
		// maxlength:150
	},
	body:{
		type:String,
		required:"Body is required"
		//if want to set length of the body of the post uncomment below 2 lines
		// minlength:4,
		// maxlength:2000
	}
});
module.exports=mongoose.model("Post",postSchema);