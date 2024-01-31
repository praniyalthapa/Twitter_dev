import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';
class TweetRepository extends CrudRepository{ //we just extended with CRUD repos
  constructor(){
   super(Tweet);
  }


   //creating CRUD here
    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
            
        } catch (error) {
            console.log(error);
            
        }
    }
    // async get(id){
    //     try {
    //         const tweet=await Tweet.findById(id);
    //         return tweet;
            
    //     } catch (error) {
    //         console.log(error);
            
    //     }

    // }
    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate('comments').lean(); //this lean is used to convert mongoose object into js object on your console screen
            return tweet;
            
        } catch (error) {
            console.log(error);
            
        }
    }

    // async destroy(id){ //as we have extended we don't need this operation 
    //     try {
    //         const tweet=await Tweet.findByIdAndRemove(id);
    //         return tweet;
            
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }
    async getAll(offset,limit){
        try {
            const tweet=await Tweet.find().skip(offset).limit(limit); //this skip and limit are hooks in mongoDB
            return tweet;
            
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default TweetRepository;