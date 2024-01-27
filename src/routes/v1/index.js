import express from 'express';
import {createTweet} from '../../controller/tweet-controller.js';
const router=express.Router();
//using this router we can write specific get,post request that is actually going to helps us to hit the particular API routes we want.
router.post('/tweets',createTweet);



export default router;