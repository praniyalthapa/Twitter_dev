import mongoose from "mongoose";
const likeSchema=new mongoose.Schema({
   onModel:{ //on which model we are going to like on comment or a tweet
      type:String,
      required:true,
      enum:['Tweet','Commment'] //either we are liking on tweet or comment
   },
   likeable:{ //if onmodel is tweet then likeable is going to be a tweetId 
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
   },
   user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
   }
},{timestamps:true});
const  Like=mongoose.model('Like',likeSchema);
export default Like;