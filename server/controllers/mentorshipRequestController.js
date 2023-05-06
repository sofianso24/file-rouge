import { Aprenant } from '../models/aprenant.js';
import { Mentor } from '../models/mentor.js';
import { MentorshipRequest } from '../models/mentorshipRequest.js';


// Consulter les demandes de mentorat

export const getMentorshipRequests = async (req, res) => {
  try {
    
    // Find all mentorship requests from learners

    const requests = await MentorshipRequest.find({ mentor: req.user._id }).populate('aprenant', 'nom prenom mail');
    
    res.status(200).send(requests);
  } catch (error) {
    res.status(400).send(error);
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

    // Check if the mentorship request was sent by the authenticated aprenant

    const aprenant = await Aprenant.findOne({ userInherit: req.user._id });

    if (!aprenant) {
      return res.status(404).send('Aprenant not found');
    }

    if (!mentorshipRequest.aprenant.equals(aprenant._id)) {
      return res.status(403).send('You are not authorized to accept this mentorship request');
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
  try {
    const mentorshipRequest = await MentorshipRequest.findOne({
      _id: req.params.requestId,
      mentor: req.user._id, // Only the mentor who received the request can reject it
      status: "pending", // Make sure the request is still pending
    });
    if (!mentorshipRequest) {
      return res.status(404).send({ message: "Mentorship request not found" });
    }

    mentorshipRequest.status = "rejected";
    await mentorshipRequest.save();

    res.status(200).send({ message: "Mentorship request rejected" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

