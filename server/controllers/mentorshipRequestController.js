import { Aprenant } from '../models/aprenant.js';
import { Mentor } from '../models/mentor.js';
import { MentorshipRequest } from '../models/mentorshipRequest.js';


// Consulter les demandes de mentorat

export const getMentorshipRequests = async (req, res) => {
    
       const mentorId = req.params.id
       try {
           const requests = await Mentor.findById(mentorId).populate("mentorshipsRequests")
        
            if(!requests){
               return res.json({message : "there are no requests"})
            }

            res.send({requests})
             
       } catch (error) {
        console.log(error)
       }
}


// Consulter les demandes de mentorat (Aprenant)

export const getMentorshipRequestsApreant = async (req, res) => {
    
  const aprenantId = req.params.id
  try {
      const requests = await Aprenant.findById(aprenantId).populate("mentorshipsRequests").select("mentorshipsRequests")
   
       if(!requests){
          return res.json({message : "there are no requests"})
       }

       res.send({requests})
        
  } catch (error) {
   console.log(error)
  }
}


// accept a mentorship request  

export const acceptMentorshipRequest = async (req, res) => {
  try {
    const { requestId, mentorId } = req.body;
    
    // Find the mentor by ID

    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).send('Mentor not found');
    }

    // Find the mentorship request by ID

    const mentorshipRequest = await MentorshipRequest.findById(requestId);

    if (!mentorshipRequest) {
      return res.status(404).send('Mentorship request not found');
    }

    // Check if the mentorship request has already been accepted

    if (mentorshipRequest.status === 'accepted') {
      return res.status(400).send('Mentorship request has already been accepted');
    }


    // Update the mentorship request status to accepted

    mentorshipRequest.status = 'accepted';

    await mentorshipRequest.save();

    res.status(200).send('Mentorship request accepted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// reject a mentorship request 

export const rejectMentorshipRequest = async (req, res) => {
  const {mentorId, requestId} = req.body
  try {
  const mentor = await Mentor.findById(mentorId)
  
  if (!mentor ){
    return res.json({message:"mentor not found" })
  }

    const mentorshipRequest = await MentorshipRequest.findById(requestId)
  
    if (!mentorshipRequest) {
      return res.status(404).send({ message: "Mentorship request not found" });
    }

    mentorshipRequest.status = "rejected";
    await mentorshipRequest.save();

    res.status(200).send({ message: "Mentorship request rejected",mentorshipRequest });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

