import express from 'express';
import {createTweet, getTweet} from '../../controller/tweet-controller.js';
import {toogleLike} from '../../controller/like-controller.js';
import {createComment} from '../../controller/comment-controller.js';
import {signup,login} from '../../controller/auth-controller.js';
import {authenticate} from '../../middleware/authenticate.js';
const router=express.Router();
//using this router we can write specific get,post request that is actually going to helps us to hit the particular API routes we want.
router.post('/tweets',authenticate, createTweet);
router.get('/tweets/:id',getTweet);

router.post('/likes/toogle',authenticate,toogleLike);
router.post('/comments',createComment);
router.post('/signup', signup);

router.post('/login',login);
export default router;