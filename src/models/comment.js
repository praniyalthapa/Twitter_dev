import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    content:{
        type:String,  
        required:true,
    },
    userId:{   //it is not compulsory
        type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
    },
    onModel:{
        type:String,
      required:true,
      enum:['Tweet','Commment'] //we can comment on a tweet or in a comment only
    },
  commentable:{
    type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
  }
  
},{timestamps:true});  //this is for timestamps so old data don't have this feature but new created data has new feature of timestamps

const Comment=mongoose.model('Comment',commentSchema);  //creating model using which we are connecting server

export default Comment;
