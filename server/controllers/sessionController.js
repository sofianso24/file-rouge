import { Mentor } from "../models/mentor.js";
import { Aprenant } from "../models/aprenant.js";
import { Session } from "../models/session.js";


// Lancer une session de mentorat


export const launchMentoringSession = async (req, res) => {
  
  const { mentorId, aprenantId, startTime, endTime, link,date } = req.body;

  try {
    const mentor = await Mentor.findById(mentorId);
    const aprenant = await Aprenant.findById(aprenantId);

    if (!mentor || !aprenant) {
      return res.status(404).json({ message: "Mentor or aprenant not found." });
    }

// check if the mentor has accepted the mentorship request from the aprentice

    if(aprenant.mentorshipsRequests.status !== "accepted" ){
          res.json({message : "l'aprenant n'est pas autorisè a faire le session de mentorat"})   
    }

    // Create the new session
    
    const session = new Session({
      mentor: mentorId,
      aprenant: aprenantId,
      startTime,
      endTime,
      link,
      date
    });

    // Save the session and add it to the mentor's and apprentice's sessions arrays

    await session.save();

    mentor.sessions.push(session._id);
    await mentor.save();

    aprenant.sessions.push(session._id);
    await aprenant.save();

    res.status(201).json({ message: "Mentoring session launched successfully.", session });
  } catch (error) {
    res.status(500).json({ message: `Error launching mentoring session: ${error.message}` });
  }
};