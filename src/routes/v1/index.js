import express from 'express';
import {createTweet} from '../../controller/tweet-controller.js';
import {toogleLike} from '../../controller/like-controller.js';
import {createComment} from '../../controller/comment-controller.js';
const router=express.Router();
//using this router we can write specific get,post request that is actually going to helps us to hit the particular API routes we want.
router.post('/tweets',createTweet);
router.post('/likes/toogle',toogleLike);
router.post('/comments',createComment);

export default router;