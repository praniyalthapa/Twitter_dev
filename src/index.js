const express=require('express');
const connect=require('./config/database');
const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');
const app=express();
app.listen(3000,async()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb is connected now');
  



});