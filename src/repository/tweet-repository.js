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
            const tweet=await Tweet.findById(id).populate('comments');
            return tweet;
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async update(tweetId,data){
       try {
        const tweet=await Tweet.findByIdAndUpdate(tweetId, data, { new: true }); //this new:true helps to return the new updated documents while we already get updated in out document not in return 
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
}

module.exports=TweetRepository