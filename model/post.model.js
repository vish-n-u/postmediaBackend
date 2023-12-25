const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  
  userId:{
    type:mongoose.SchemaTypes.ObjectId,
    required: true,
    ref:"User"
  },
  commentIds:{
    type:[mongoose.SchemaTypes.ObjectId],
    ref:"Comment"
  }
});

module.exports = mongoose.model("Post", Post);