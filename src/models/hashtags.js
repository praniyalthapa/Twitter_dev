import mongoose from "mongoose";
const hashtagSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique:true
  },
  //you have to know how many tweets belongs to a hashtags(tweets->multiple hashtag) and (one hashtag ->multiple tweets)
 tweets:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }
 ]
},{timestamps:true});
 //to make capital hashtags into lower case hashtags automatically we are doing this operation using .pre
 

  hashtagSchema.pre('save', function (next) {
    this.title = this.title.toLowerCase(); // Fix: Assign the lowercase title to this.title
    console.log(this);
    next();
  });
const Hashtag=mongoose.model('Hashtag',hashtagSchema);
export default Hashtag;