/** @format */

const router = require('express').Router();
const Message = require('../models/message_model');

router.post('/', async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(201).json({
      status: true,
      message: 'message has been saved',
      data: savedMessage,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
});

router.get('/:conversationId', async (req, res) => {
  const conversationId = req.params.conversationId;

  try {
    const messages = await Message.find({ conversationId: conversationId });
    res.status(200).json({
      status: true,
      message: 'all messages',
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
});

module.exports = router;
