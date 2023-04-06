exports.createPostValidator=(req,res,next)=>{
	req.check('title',"Write a title").notEmpty()
	//if want to set the length of title uncommet below two lines
	// req.check('title',"title must contain 4-150 characters").isLength({
	// 	min:4,max:150
	// })
	req.check('body',"Write a body").notEmpty()
	//If want to set the length uncomment below two lines
	// req.check("body","Body must be between 4-2000 characters").isLength({
	// 	min:4,max:2000
	// })
	const errors=req.validationErrors()
	if(errors){
		const firstError=errors.map((error)=>error.msg)[0]
		return res.status(400).json({error:firstError})
	}
//proceed to next middleware
	next();
}