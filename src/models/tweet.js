const mongoose=require('mongoose');
const Comment=require('./comment');
const TweetSchema = new mongoose.Schema({
    content:{
        type:String,  
        required:true,
    },
    userEmail:{   //it is not compulsory
        type:String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
},{timestamps:true});  //this is for timestamps so old data don't have this feature but new created data has new feature of timestamps


TweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \nCreated by: ${this.userEmail}`;
});


TweetSchema.pre('save',function(next){
    this.content=this.content+'...';
    console.log('First pre middleware');
    next();
})



const Tweet=mongoose.model('Tweet',TweetSchema);  //creating model using which we are connecting server

module.exports=Tweet;
