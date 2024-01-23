const express=require('express');
const connect=require('./config/database');
const TweetRepository=require('./repository/tweet-repository');
const HashtagRepository=require('./repository/hastag-repository');
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
   
    let repo=new HashtagRepository;
    await repo.bulkCreate([
        {
            title:'Header',
            tweets:[]
        },
        {
            title:'Coding',
            tweets:[]
        },
        {
            title:'Happy ',
            tweets:[]
        },
        {
            title:'Exited',
            tweets:[]
        },
        {
            title:'Learning',
            tweets:[]
        }
        
    ]);

});