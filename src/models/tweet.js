import mongoose from "mongoose";
const TweetSchema = new mongoose.Schema({
    content:{
        type:String,  
        required:true,
      maxlength: [250,'Tweet cannot be more than 250 characters'],
    },
    likes:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
      }
    ],
    comments:[
          {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
          }
         

    ]
    
  
},
 {timestamps:true});  //this is for timestamps so old data don't have this feature but new created data has new feature of timestamps


 
const Tweet=mongoose.model('Tweet',TweetSchema);  //creating model using which we are connecting server

export default Tweet;
