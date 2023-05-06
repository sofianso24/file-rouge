import { Aprenant } from "../models/aprenant.js";

// consulter son profil

export const viewAprenantProfile = async (req, res) => {
    try {
      const apprenantId = req.params.id;
      const aprenant = await Aprenant.findById(apprenantId).populate('userInherit');
      if (!aprenant) {
        return res.status(404).json({ message: 'apprenant not found' });
      }
      return res.status(200).json({aprenant });
    } catch (error) {
      return res.status(500).json({ message: `Server error: ${error.message}` });
    }
  };