const Hashtag=require('../models/hashtags');
class HashtagRepository{
   //creating CRUD here
    async create(data){
        try {
            const hashtag=await Hashtag.create(data);
            return hashtag;
            
        } catch (error) {
            console.log(error);
            
        }
    }
    async get(id){
        try {
            const hashtag=await Hashtag.findById(id);
            return hashtag;
            
        } catch (error) {
            console.log(error);
            
        }

    }
    async bulkCreate(data){
        try {
            const tags=await Hashtag.insertMany(data);
            
        
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async destroy(id){
        try {
            const response=await Hashtag.findByIdAndRemove(id);
            return response;
            
        } catch (error) {
            console.log(error);
            
        }
    }
}

module.exports=HashtagRepository