const express=require("express")
const postController=require('../Controller/post.js')
const Router=express.Router()
const validator=require('../validator')
Router.get('/',postController.getPosts)
Router.post("/post",validator.createPostValidator,postController.createPost);
module.exports=Router
