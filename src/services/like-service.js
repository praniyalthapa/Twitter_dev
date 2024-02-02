import {LikeRepository,TweetRepository} from '../repository/index';
 
class LikeService{
    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    } 
async toggleLike(modelId,modelType,userId){   // /api/v1/likes/toggle?id=modelid&type=Tweet
       if(modelType=='Tweet'){
         var likeable=await this.tweetRepository.get(modelId).populate('likes'); //helps to get the tweet
         

       }
       else if(modelType=='Comment'){
          
       }
       else{
    throw new Error('Model type is not known here!');
       }
       const exists =await this.likeRepository.findByUserAndLikeable({
        user:userId,
        onModel:modelType,
        likeable:modelId
       });
       if(exists){ //if it exists then remove logic is written
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isRemoved=true;
       }
       else{
            const newLike=await this.likeRepository.create({
              user:userId,
              onModel:modelType,
              likeable:modelId
            });
          likeable.likes.push(newLike);
          await likeable.save();
          var isRemoved =false;
       }
       return isRemoved;
}
}
export default LikeService;