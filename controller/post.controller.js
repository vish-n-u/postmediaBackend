const Post = require('../model/post.model')

exports.getAllPost = async(req,res)=>{
    try{
        const allposts = await Post.find().populate({path:"userId",select:"-password -objectId"})
    return res.status(200).send({message:allposts})

    }
    catch(err){
        console.log(err);
    return res.status(500).send({ message: "server err" });
    }
}


exports.create = async(req,res)=>{
    try{
        let postObj = {
            content : req.body.content,
            userId:req.user._id,
        }
        const newPost = await Post.create(postObj)
        const newPostSend = await Post.findOne({_id:newPost._id}).populate(
                                            {path:"userId",select:"-password -objectId"}
        )
        return res.status(201).send({message:newPostSend})
        
    }
    catch(err){
        console.log(err);
    return res.status(500).send({ message: "server err" });
    }
}