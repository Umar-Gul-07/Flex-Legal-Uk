// routes/chat.js
import express from 'express';
import ChatController from '../controllers/chatController.js';
import verifyToken from '../utils/VerifyToken.js';

const router = express.Router();

router.post('/', ChatController.createOrGetChat); // create/resume chat - no auth needed
router.get('/user/:userId', verifyToken, ChatController.getUserChats); // get all chats for user
router.get('/lawyer/:lawyerId', ChatController.getLawyerChats); // get all chats for lawyer - no auth needed
router.get('/find/:userId/:lawyerId', ChatController.getChatByParticipants); // specific chat - no auth needed

export default router;
