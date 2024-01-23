const { TweetRepository}=require('../repository/index');
class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
    }
    async create(data){
        //here we will get the content of tweets
        const content=data.content;
        const tags = (content.match(/#[^\s#]+/ig) || []).map(tag => tag.slice(1));
        console.log(tags);
        const tweet=await this.tweetRepository.create(data); //heps to creats a tweet
        return tweet;

    }

}

module.exports=TweetService;

/*
   this is my second #amazing project and i m learning #best things. 
   In this content we first want to read the content and select or finds the hashtag(#amazing and #best)
*/