// const express=require('express');
import express from 'express';
import { connect } from './config/database.js';
import { UserRepository, TweetRepository } from './repository/index.js';
import  LikeService  from './services/like-service.js';
import bodyParser from 'body-parser';
//import  TweetService  from './services/tweet-service.js';
import apiRoutes from './routes/index.js';
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);
app.listen(3000,async()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb is connected now');
//     const userRepo=new  UserRepository();
//  const tweetRepo=new TweetRepository();
//     const tweets= await tweetRepo.getAll(0,4);
//    const users=await userRepo.getAll();
// //from this user obj we are going to like 
//   const likeService=new LikeService();
//    await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id);    //modelId,modelType,userId
//    console.log(likeService);
// const user = await userRepo.create({
//    email: 'example@example.com',
//    password: 'password123',
//    name: 'John Doe'
// });

// const tweets = await tweetRepo.getAll(0, 2);
// console.log(tweets);
// const likeService = new LikeService();
// await likeService.toggleLike(tweets[0]._id, 'Tweet', user._id); // modelId, modelType, userId
// console.log(likeService);
});   

