const Tweet=require('../models/tweet');
class TweetRepository{
   //creating CRUD here
    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
            
        } catch (error) {
            console.log(error);
            
        }
    }
    async get(id){
        try {
            const tweet=await Tweet.findById(id);
            return tweet;
            
        } catch (error) {
            console.log(error);
            
        }

    }
    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate('comments').lean(); //this lean is used to convert mongoose object into js object on your console screen
            return tweet;
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async update(tweetId,data){
       try {
        const tweet=await Tweet.findByIdAndUpdate(tweetId, data, { new: true }); //this new:true helps to return the new updated documents while we already get updated in out document not in return console
        return tweet;
        
       } catch (error) {
        console.log(error);
        
       }

    }
    async destroy(id){
        try {
            const tweet=await Tweet.findByIdAndRemove(id);
            return tweet;
            
        } catch (error) {
            console.log(error);
            
        }
    }
    async getAll(offset,limit){
        try {
            const tweet=await Tweet.find().skip(offset).limit(limit); //this skip and limit are hooks in mongoDB
            return tweet;
            
        } catch (error) {
            console.log(error);
            
        }
    }
}

module.exports=TweetRepository