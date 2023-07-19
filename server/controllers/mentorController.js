import path from "path";
import multer from "multer";

import { Aprenant } from "../models/aprenant.js";
import { Mentor } from "../models/mentor.js"
import { Session } from "../models/session.js";

// consulter son profil

export const viewMentorProfile = async (req, res) => {
  try {
    const mentorId = req.params.id;
    const mentor = await Mentor.findById(mentorId).populate('userInherit');
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    return res.status(200).json(mentor);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// modifier son profil 

export const updateMentorProfile = async (req, res) => {

  console.log(req)
  return 
  const { lastName, firstName, company, domain, experience, disponibility, about, skills, localisation, responseTime, price } = req.body;

  const mentorId = req.params.id;


  try {
    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }
    mentor.firstName = firstName;
    mentor.lastName = lastName;
    mentor.localisation = localisation;
    mentor.disponibility = disponibility;
    mentor.responseTime = responseTime;
    mentor.company = company;
    mentor.domain = domain;
    mentor.experience = experience;
    mentor.about = about;
    mentor.price = price;
    mentor.skills = skills;

    // Check if a file is uploaded
    if (req.file) {
      mentor.image = req.file.filename; // Save the filename to the mentor's image field
    }

    await mentor.save();

    return res.status(200).json({ message: "Mentor profile updated successfully", mentor });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong. Please try again later" });
  }
};


// consultter l'historique des sessions de mentorat

export const mentorSessionHistory = async (req, res) => {

  const mentorId = req.params.id;

  try {

    const mentor = await Mentor.findById(mentorId)

    if (!mentor) {
      return res.status(404).json({ message: "mentor not found" })
    }
    const sessions = mentor.sessions

    res.status(200).json({ sessions })

  } catch (error) {
    console.log(error)
  }

};

// suivre le progrès d'un aprenant

export const aprenantProgress = async (req, res) => {

  const { sessionId, note } = req.body

  try {
    const session = await Session.findById(sessionId).populate("mentor aprenant")
    if (!session) {
      return res.send({ message: "session not found" })
    }


    // Calculate the overall progress for the aprenant

    const aprenantSessions = await Session.find({ aprenant: session.aprenant._id });
    const aprenantProgress = aprenantSessions.map(s => s.note);
    const aprenantOverallProgress = aprenantProgress.length > 0 ? aprenantProgress.reduce((total, note) => total + note) / aprenantProgress.length : 0;

    // Update the mentor's overall rating

    const aprenant = await Aprenant.findById(session.aprenant._id);
    aprenant.progres = aprenantOverallProgress;
    await aprenant.save();

    res.status(200).json({ message: "aprenant noted successfully." });


  } catch (error) {
    res.send(error)
  }
}


// consulter un aprenant specific : 


export const getSpecificAprentice = async (req, res) => {

  const aprenantId = req.params.id
  try {
    const aprenant = await Aprenant.findById(aprenantId)

    if (!aprenant) {
      return res.status(404).json({ message: "aprenant not found." });
    }

    res.status(200).json({ aprenant });
  } catch (error) {
    res.status(500).json({ message: `Error retrieving mentor information: ${error.message}` });
  }
}