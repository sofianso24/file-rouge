
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
      return res.status(200).json({ mentor });
    } catch (error) {
      return res.status(500).json({ message: `Server error: ${error.message}` });
    }
  };

// modifier son profil 

  export const updateMentorProfile = async (req, res) => {

    const { companyName, domaine, experience, disponibilites, description, prixHoraire, skills } = req.body;
    const mentorId = req.params.id;
    
    try {
      const mentor = await Mentor.findById(mentorId);
      
      if (!mentor) {
        return res.status(404).json({ message: "Mentor not found" });
      }
  
      mentor.companyName = companyName;
      mentor.domaine = domaine;
      mentor.experience = experience;
      mentor.disponibilites = disponibilites;
      mentor.description = description;
      mentor.prixHoraire = prixHoraire;
      mentor.skills = skills;
  
      await mentor.save();
  
      return res.status(200).json({ message: "Mentor profile updated successfully",mentor });
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
  
    if(!mentor){
       return res.status(404).json({message : "mentor not found"})
    }
  const sessions =  mentor.sessions

  res.status(200).json({sessions})
    
  } catch (error) {
    console.log(error)
  }

};