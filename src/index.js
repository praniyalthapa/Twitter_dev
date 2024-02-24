// const express=require('express');
import express from 'express';
import { connect } from './config/database.js';
import {passportAuth} from './config/jwt-middleware.js'
// import { UserRepository, TweetRepository } from './repository/index.js';
// import  LikeService  from './services/like-service.js';
import bodyParser from 'body-parser';
import passport from "passport";
//import  TweetService  from './services/tweet-service.js';
import apiRoutes from './routes/index.js';
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);
app.use(passport.initialize());
passportAuth(passport);
app.listen(3000,async()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb is connected now');

});   

