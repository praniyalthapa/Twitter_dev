// const express=require('express');
import express from 'express';
import {connect} from './config/database.js';
import service from './services/tweet-service.js';
const app=express();
app.listen(3000,async()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb is connected now');
    let ser=new service();
    await ser.create({
        content:'Coding is hard #GIVEUP'
    });

    
});       