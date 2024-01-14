const mongoose=require('mongoose');
const commentSchema = new mongoose.Schema({
    content:{
        type:String,  
        required:true,
    },
    userEmail:{   //it is not compulsory
        type:String
    },
  
},{timestamps:true});  //this is for timestamps so old data don't have this feature but new created data has new feature of timestamps

const Comment=mongoose.model('Comment',commentSchema);  //creating model using which we are connecting server

module.exports=Comment;
