const express=require('express');
const connect=require('./config/database');
// const Tweet=require('./models/tweet');
const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');
const app=express();
app.listen(3000,async()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb is connected now');
    // const tweet=await Tweet.create({
    //     content:'Third tweet',

    // });
    // const tweets=await Tweet.find();
//    tweets.userEmail='nepal123@gmail.com',
//    tweets.save();  
    // const tweet=await repo.update('65a235f7c38917bedfcaad37', //it updates document correctly but returns old document not latest document so we used { new: true } in update CRUD
    // {content:'new latest content here'});
    // const tweet=await repo.create({content:'my new tweet to add some comments '});
    // console.log(tweet);

    // tweet.comments.push({content:'This is my first comment'}); //comment also had id here
   
    // await tweet.save();
     const repo=new TweetRepository();
    // const tweet=await repo.create({content:'Tweet with comment schema as a new change'});
    // const comment=await Comment.create({content:'new comment'});
    // tweet.comments.push(comment);
// await tweet.save();
const tweet=await repo.getWithComments('65a392f1285bef9ec93fe3e2');
//implementing offset and limit in our pagination 
// const tweet=await repo.getAll(0,3);
//     console.log(tweet[0].contentWithEmail);
// const tweet=await repo.create({content:'With hooks'});
console.log(tweet);

//https://mongoosejs.com/docs/api/schematype.html#SchemaType.prototype.index()
//https://www.mongodb.com/docs/v5.0/indexes/

});