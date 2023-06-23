/** @format */

const router = require("express").Router();
const Message = require("../models/message_model");

router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(201).json({
      status: true,
      message: "conversation has been saved",
      data: savedConversation,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  } 
});

module.exports = router;
