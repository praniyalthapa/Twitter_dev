import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";
// class LikeRepository extends CrudRepository {
//  constructor(){
//     super(Like);
//  }
//   async findByUserAndLikeable(data){
//   try {
//    const like=await Like.findOne(data);
//    return like;
   
//   } catch (error) {
//    throw error;

//   }
//   }

// }
class LikeRepository extends CrudRepository {
   constructor() {
       super(Like);
   }

   async findByUserAndLikeable(data) {
       try {
           const like = await Like.findOne(data);
           if (!like) {
               return null;  // or handle the case when nothing is found
           }

           // Convert the plain object to a Mongoose model instance
           return new Like(like.toObject());
       } catch (error) {
           throw error;
       }
   }
}

export default LikeRepository;
