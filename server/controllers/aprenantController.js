import { Aprenant } from "../models/aprenant.js";
import { Mentor } from "../models/mentor.js";
import { MentorshipRequest } from "../models/mentorshipRequest.js";
import { Session } from "../models/session.js";

// consulter son profil

export const viewAprenantProfile = async (req, res) => {

  const apprenantId = req.params.id;

  try {
    const aprenant = await Aprenant.findById(apprenantId).populate('userInherit');
    if (!aprenant) {
      return res.status(404).json({ message: 'apprenant not found' });
    }
    return res.status(200).json({ aprenant });
  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
};


// modifier son profil

export const updateApprenantProfile = async (req, res) => {

  const { domaineInteret, niveauEtude, description, but } = req.body;
  const aprenantId = req.params.id;

  try {
    const aprenant = await Aprenant.findById(aprenantId);

    if (!aprenant) {
      return res.status(404).json({ message: "aprenant not found" });
    }

    aprenant.domaineInteret = domaineInteret;
    aprenant.niveauEtude = niveauEtude;
    aprenant.description = description;
    aprenant.but = but;

    await aprenant.save();

    return res.status(200).json({ aprenant });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong. Please try again later" });
  }
};


// consultter l'historique des sessions de mentorat

export const aprenantSessionHistory = async (req, res) => {

  const aprenantId = req.params.id;

  try {
    const sessions = await Aprenant.findById(aprenantId).populate("sessions")

    res.send({ sessions })

  } catch (error) {
    console.log(error)
  }
};

// Consulter la liste des mentors disponibles 

export const getAvailableMentors = async(req, res) => {
  try {
    // Find all the mentors who are available

    const mentors = await Mentor.find({ isAvailable: true });

    // Return the list of mentors

    res.status(200).json( mentors );
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `Error getting available mentors: ${error.message}` });
  }

}


// export const getAvailableMentors = async (req, res) => {
//   try {
//     // Get the pagination parameters from the query string
//     const { page = 1, limit = 5 } = req.query;

//     // Convert the page and limit values to numbers
//     const pageNumber = parseInt(page);
//     const limitNumber = parseInt(limit);

//     // Calculate the skip value based on the page and limit
//     const skip = (pageNumber - 1) * limitNumber;

//     // Find all the mentors who are available with pagination
//     const mentors = await Mentor.find({ isAvailable: true })
//       .skip(skip)
//       .limit(limitNumber);

//     // Return the list of mentors
//     res.status(200).json(mentors);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: `Error getting available mentors: ${error.message}` });
//   }
// };
// Effectuer une demande de mentorat


export const requestMentoring = async (req, res) => {
  const { aprenantId, mentorId, message } = req.body;

  try {
    const aprenant = await Aprenant.findById(aprenantId);
    const mentor = await Mentor.findById(mentorId);

    if (!aprenant || !mentor) {
      return res.status(404).json({ message: "Aprenant or mentor not found." });
    }

    const request = new MentorshipRequest({
      aprenant: aprenantId,
      mentor: mentorId,
      message: message,
      status: "pending"
    });

    await request.save();

    aprenant.mentorshipsRequests.push(request._id);
    await aprenant.save()

    mentor.mentorshipsRequests.push(request._id);
    await mentor.save()

    res.status(201).json({ message: "Mentoring request sent successfully.", request });
  } catch (error) {
    res.status(500).json({ message: `Error sending mentoring request: ${error.message}` });
  }
};

// get a specific mentor

export const getSpecificMentor = async (req, res) => {

  const mentorId = req.params.id
  try {
    const mentor = await Mentor.findById(mentorId)

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found." });
    }

    res.status(200).json({ mentor });
  } catch (error) {
    res.status(500).json({ message: `Error retrieving mentor information: ${error.message}` });
  }
}

//filtrer des mentors par domaine

export const filtreMentorsByDomain = async (req, res) => {
  const { domain } = req.query;

  try {
    // Search for mentors with the specified domain
    const mentors = await Mentor.find({ domain: { $in: JSON.parse(domain) } });

    res.status(200).json({ mentors });
  } catch (error) {
    res.status(500).json({ message: `Error searching for mentors: ${error.message}` });
  }
};

//filtrer des mentors par prixHoraire

export const filtreMentorsByPrice = async (req, res) => {
  const { price } = req.query;

  try {
    // Search for mentors with the specified price

    const mentors = await Mentor.find({ price })

    res.status(200).json({ mentors });
  } catch (error) {
    res.status(500).json({ message: `Error searching for mentors: ${error.message}` });
  }
}


//filtrer des mentors par skills

export const filtreMentorsByskill = async (req, res) => {
  const { skills } = req.query;


  try {

    // filtrer for mentors with the specified skill

    const mentors = await Mentor.find({ skills: { $in: JSON.parse(skills) } });

    res.status(200).json({ mentors });
  } catch (error) {
    res.status(500).json({ message: `Error searching for mentors: ${error.message}` });
  }
};



// filtrer des mentors par rating

export const filtreMentorsByRating = async (req, res) => {
  const { rating } = req.query;

  try {
    // Search for mentors with the specified rating

    const mentors = await Mentor.find({ rating: rating }).populate('sessions');

    res.status(200).json({ mentors });
  } catch (error) {
    res.status(500).json({ message: `Error searching for mentors: ${error.message}` });
  }
}


// noter un mentor 

export const rateMentor = async (req, res) => {
  const { sessionId, rating } = req.body;

  try {
    const session = await Session.findById(sessionId).populate('mentor aprenant');

    if (!session) {
      return res.status(404).json({ message: "Session not found." });
    }

    // check if l'aprenant had a session with the mentor so he can rate him

    if (res.locals.userId !== session.aprenant._id) {
      return res.send({ message: "you cant rate this mentor" })
    }


    // Check if the mentor has already been rated for this session

    if (session.rating) {
      return res.status(400).json({ message: "You have already rated this mentor for this session." });
    }

    // Update the session with the rating

    session.rating = rating;
    await session.save();

    // Calculate the overall rating for the mentor

    const mentorSessions = await Session.find({ mentor: session.mentor._id, rating: { $exists: true } });
    const mentorRatings = mentorSessions.map(s => s.rating);
    const mentorOverallRating = mentorRatings.length > 0 ? mentorRatings.reduce((total, rating) => total + rating) / mentorRatings.length : 0;

    // Update the mentor's overall rating

    const mentor = await Mentor.findById(session.mentor._id);
    mentor.rating = mentorOverallRating;
    await mentor.save();

    res.status(200).json({ message: "Mentor rated successfully." });
  } catch (error) {
    res.status(500).json({ message: `Error rating mentor: ${error.message}` });
  }
};




// filter les mentors :

export const filtreMentors = async (req, res) => {
  const { skills, domain, price } = req.query;
  const querySkills = skills.split(",")
  const queryDomain = domain.split(",")
  const queryPrice = price.split(",")



  if (skills === "" & price === "" & domain !== "") {
   
    try {
  
      const mentors = await Mentor.find({domain: { $in: queryDomain }});
  
      return res.status(200).json({ mentors });
    } catch (error) {
       return res.status(500).json({ message: `Error searching for mentors: ${error.message}` });
    }
  }

  if (domain === "" & skills !== "" & price === "") {
   
    try {
  
      const mentors = await Mentor.find({skills: { $in: querySkills }});
  
      return res.status(200).json({ mentors });
    } catch (error) {
       return res.status(500).json({ message: `Error searching for mentors: ${error.message}` });
    }
  }

  if (domain === "" & price !== "" & skills === "") {
  
    try {
  
      const mentors = await Mentor.find({price: { $in: queryPrice }});
  
      return res.status(200).json({ mentors });
    } catch (error) {
       return res.status(500).json({ message: `Error searching for mentors: ${error.message}` });
    }
  }

  if (skills === "" & domain === "" & price === "") {
  
    try {
  
      const mentors = await Mentor.find();
  
      return res.status(200).json({ mentors });
    } catch (error) {
       return res.status(500).json({ message: `Error searching for mentors: ${error.message}` });
    }
    
  }

if (skills !== "" & domain !== "" & price !== "") {
  try {


    // filtrer for mentors with the specified skill

    const mentors = await Mentor.find({ skills: { $in: querySkills },domain: { $in: queryDomain }, price: { $in: queryPrice }});

    res.status(200).json({ mentors });
  } catch (error) {
    res.status(500).json({ message: `Error searching for mentors: ${error.message}` });
  }
}
  
};