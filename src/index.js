// const express=require('express');
import express from 'express';
import {connect} from './config/database.js';
import bodyParser from 'body-parser';
import service from './services/tweet-service.js';
import apiRoutes from './routes/index.js';
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);



app.listen(3000,async()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb is connected now');
    // let ser=new service();
    // await ser.create({
    //     content:'Whatever you are doing is good #KEEPDOING #STAYPOSITIVE'
    // });

    
});       