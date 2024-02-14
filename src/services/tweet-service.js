// //const { TweetRepository,HashtagRepository}=require('../repository/index');
//  //import {TweetRepository,HashtagRepository} from '../repository/index.js';
//  import Repositories from '../repository/index.js';
// class TweetService{
//     constructor(){
//         // this.tweetRepository=new TweetRepository();
//         // this.hashtagRepository=new HashtagRepository();
//         this.tweetRepository = new Repositories.TweetRepository();
//     this.hashtagRepository = new Repositories.HashtagRepository();
//     }
//     async create(data){
//         //here we will get the content of tweets
//         const content=data.content;
//         const tags = (content.match(/#[^\s#]+/ig) || []).map((tag)=>tag.substring(1).toLowerCase());
        
//         const tweet=await this.tweetRepository.create(data); //heps to creats a tweet
//         let alreadyPresentTags =await this.hashtagRepository.findByName(tags);
       
//        let titleOFTags=alreadyPresentTags.map(tags => tags.title);


//         // const alreadyPresentTagsResult = await this.hashtagRepository.findByName(tags);
//         // const alreadyPresentTags = alreadyPresentTagsResult.map(tag => tag.title);
//         let newTags=tags.filter(tag=>!titleOFTags.includes(tag));
       
//         newTags=newTags.map(tag=>{
//             return {title:tag,tweets:[tweet.id]}
//         });
       
        
//         //we need to take out all those hastags which are not present in this array of  hashtags Logic??
//         //[Happy,Coding,Healthy,learning]-> you only have [{title:'Happy},{title:'Healthy}].Remaining two are not created we want to create these two also 
//         const response=await this.hashtagRepository.bulkCreate(newTags);
//         alreadyPresentTags.forEach((tag)=>{
//             tag.tweets.push(tweet.id);
//             tag.save();
//         });
//         console.log(response);
    




//         return tweet;

//     }

// }

// export default TweetService;

// /*
//    this is my second #amazing project and i m learning #best things. 
//    In this content we first want to read the content and select or finds the hashtag(#amazing and #best)
// */

import { TweetRepository, HashtagRepository } from '../repository/index.js'

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        console.log(data);
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                        .map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
   
}
  

export  default TweetService;
