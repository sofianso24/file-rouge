import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import { Admin } from "../models/admin.js";
import { Aprenant } from "../models/aprenant.js";
import { Mentor } from "../models/mentor.js";
import { createToken } from "../middelwares/jwt.js";


//register :

export const createUser = async (req, res) => {
    const userRole = req.body.userRole;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const mail = req.body.mail;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
  
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      userRole,
      nom,
      prenom,
      mail,
      password: hashedPassword,
    });
  
    await user.save();

    if (user.userRole === "admin") {
        try {
          
          const admin = new Admin({
            userInherit: user._id,
          });
          await admin.save();
          res.json(admin);
        } catch (error) {
          res.json(error);
        }
      }else if (user.userRole === "aprenant") {
        try {
          const description = req.body.description;
          const niveauEtude = req.body.niveauEtude;
          const disponibilites = req.body.disponibilites;
          const but = req.body.but;
          

          const aprenant = new Aprenant({
            userInherit: user._id,
            description,
            niveauEtude,
            disponibilites,
            but,
           
          });
          await aprenant.save();
          res.json(aprenant);
        } catch (error) { 
          res.json(error);
        }
      }else if (user.userRole === "mentor") {
        try {
          const description = req.body.description;
          const domaine = req.body.domaine;
          const disponibilites = req.body.disponibilites;
          const experience = req.body.experience;
          const prixHoraire = req.body.prixHoraire;
          const companyName = req.body.companyName;
          const skills = req.body.skills;
          
          const mentor = new Mentor({
            userInherit: user._id,
            description,
            domaine,
            disponibilites,
            experience,
            prixHoraire,
            companyName,
            skills
          });
          await mentor.save();
          res.json(mentor);
        } catch (error) {
          res.json(error);
        }
      }
}

// log in : 

export const logIn = async (req, res) => {
    const { mail, password } = req.body;
    try {
    const user = await User.findOne({ mail });
    if (!user) {
      res.status(403).json("user not found");
      return
    }
  
    const passwordCompare = await bcrypt.compare(password, user.password);
  
    if (!passwordCompare) {
      res.status(403).json("password is incorrect");
      return
    }
  
    const authToken = createToken(user);
    const userId = user._id.toString();
    const userRole = user.userRole;
  
    res.cookie("auth-token", { authToken }, { maxAge: 60 * 60 * 24 * 1000,
                                              httpOnly : true,
                                             sameSite : "None",
                                            secure: true }); 

      res.cookie("userId", { userId });
      res.cookie("userRole", { userRole });
    res.status(200).json("user loged in succesfully");
  } catch (error) {
    console.log(error);
  }
  };
  
  // log out : 

  export const logOut = async (req, res) => {
    try {
      res.clearCookie("auth-token");
      res.clearCookie("userId");
      res.clearCookie("userRole");
      res.json("user loged out");
    } catch (error) {
      res.json(error);
    }
  };



  // update a user :

export const updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      // const user = await User.findById(id);
      const updateUser = await User.findByIdAndUpdate(id,{
        nom: req.body.nom,
        prenom: req.body.prenom,
        mail: req.body.mail,
        password: req.body.password,
      },{returnDocument:'after'}
      );

      res.send(updateUser);
    } catch (err) {
      res.send(err);
    }
  };
  
// get all users 

  export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  };

// get an user 

export const getAnUser = async (req,res)=>{
  const userId = req.params.id
  try {
    const user = await User.findById(userId)
    
 if (!user){
  return res.status(404).json({message: "user not found"})
 }

    res.status(200).json(user)

  } catch (error) {
    console.log(error)
  }
}

// delete all users 

  export const deleteAllUsers = async (req, res) => {
    try {
      await User.deleteMany();
      res.json("all users deleted");
    } catch (error) {
      res.json(error);
    }
  };
  
// delete a user 

export const deleteAnUser = async (req,res)=>{
  const userId = req.params.id
  try {
    const user = await User.findByIdAndDelete(userId)

    if (!user){
      return res.status(404).json({message : "user not found"})
    }

    res.status(200).json({message : "user has been deleted"})
    
  } catch (error) {
    console.log(error)
  }
}