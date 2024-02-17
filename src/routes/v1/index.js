import express from 'express';
import {createTweet, getTweet} from '../../controller/tweet-controller.js';
import {toogleLike} from '../../controller/like-controller.js';
import {createComment} from '../../controller/comment-controller.js';
import {signup} from '../../controller/auth-controller.js';
const router=express.Router();
//using this router we can write specific get,post request that is actually going to helps us to hit the particular API routes we want.
router.post('/tweets',createTweet);
router.get('/tweets/:id',getTweet);
router.post('/likes/toogle',toogleLike);
router.post('/comments',createComment);
router.post('/signup', signup);
export default router;