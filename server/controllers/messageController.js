import WebSocket from "ws";

import {Message} from "../models/message.js"
import { Aprenant } from "../models/aprenant.js";
import { Mentor } from "../models/mentor.js";



// envoyer un message

export const sendMessage = async (req, res) => {
  const { mentorId, aprenantId, message } = req.body;

  try {
      const mentor = await Mentor.findById(mentorId);
      const aprenant = await Aprenant.findById(aprenantId);

      if (!mentor || !aprenant) {
          return res.status(404).json({ message: "Mentor or aprenant not found." });
      }

      const newMessage = new Message({
          mentor: mentorId,
          aprenant: aprenantId,
          message
      });

      await newMessage.save();

      mentor.messages.push(newMessage._id);
      await mentor.save();

      aprenant.messages.push(newMessage._id);
      await aprenant.save();

      // emit a websocket event to the client with the new message

      const wss = req.app.get('wss');
      const messageData = { _id: newMessage._id, mentor: mentorId, aprenant: aprenantId, message };

      wss.clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({ type: 'new_message', data: messageData }));
          }
      });

      res.status(201).json({ message: "Message sent successfully.", newMessage });
  } catch (error) {
      res.status(500).json({ message: `Error sending message: ${error.message}` });
  }
};
  


  // recuperer les messages entre le mentor et l'aprenant
  
export const getMessages = async (req, res) => {
    const { mentorId, aprenantId } = req.query;
  
    try {
      const messages = await Message.find({
        $or: [
          { mentor: mentorId, aprenant: aprenantId },
          { mentor: aprenantId, aprenant: mentorId }
        ]
      }).populate("mentor aprenant", "nom prenom");
  
      res.status(200).json({ messages });
    } catch (error) {
      res.status(500).json({ message: `Error getting messages: ${error.message}` });
    }
  };




