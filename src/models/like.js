import mongoose from "mongoose";
const likeSchema=new mongoose.Schema({
   onModel:{ //on which model we are going to like on comment or a tweet
      type:String,
      require:true,
      enum:['Tweet','Commment'] //either we are liking on tweet or comment
   },
   likeable:{ //if onmodel is tweet then likeable is going to be a tweetId 
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        refPath:'onModel'
   },
},{timestamps:true});

const  Like=mongoose.model('Like',likeSchema);

export default Like;