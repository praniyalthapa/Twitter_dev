const express=require('express');
const connect=require('./config/database');
const {TweetRepository}=require('./repository/index');
const TweetService=require('./services/tweet-service');
const Comment=require('./models/comment');
const Tweet=require('./models/tweet');
const app=express();
app.listen(3000,async()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb is connected now');

    // const tweets=await Tweet.find({
    //     // content:{
    //     //     $in:["new latest content here","Second tweet","what are you lookig here"]
    //     // } //     content:["new latest content here","Second tweet","what are you lookig here"]
    // }); // console.log(tweets);
   
    let service=new TweetService();
    const tweet=service.create({
        content:'i am having #fun and #processing the task,#love '}
        );

        console.log(tweet);
});