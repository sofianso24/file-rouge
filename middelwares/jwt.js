import jwtPackage from "jsonwebtoken";
const { sign, verify } = jwtPackage; 


export const createToken = (user) => {
  const authToken = sign(
    { _id: user._id, mail: user.mail, userType: user.userType },
    process.env.SECRET
  );

  return authToken;
};

export const adminAuthValidation = (req, res, next) => {
    const authToken = req.cookies["auth-token"].authToken;
    const userType = req.cookies["userType"].userType;
  
    if (userType !== "admin") {
      return next();
    }
  
    if (!authToken) {
      return res.json("You are not authorized to access this route.");
    }
  
    const decodedToken = verify(authToken, process.env.SECRET);
  
    if (decodedToken.userType !== "admin") {
      return res.json("You are not authorized to access this route.");
    }
  
    try {
      return next();
    } catch (error) {
      return res.json(error);
    }
  };


  export const mentorAuthValidation = (req, res, next) => {
    const authToken = req.cookies["auth-token"]?.authToken;
    const userType = req.cookies["userType"]?.userType;
    if (userType !== "mentor") {
      return res.status(401).json({ message: "You are not authorized to access this route." });
    }
  
    if (!authToken) {
      return res.status(401).json({ message: "You must be authenticated to access this route." });
    }
  
    try {
      const decodedToken = verify(authToken, process.env.SECRET);
      if (decodedToken.userType !== "mentor") {
        return res.status(401).json({ message: "You are not authorized to access this route." });
      }
      req.mentor = decodedToken;
      next();
    } catch (error) {
      return res.status(401).json({ message: `Authentication error: ${error.message}` });
    }
  };


  export const aprenantAuthValidation = (req, res, next) => {
    const authToken = req.cookies["auth-token"]?.authToken;
    const userType = req.cookies["userType"]?.userType;
  
    if (userType !== "aprenant") {
      next();
      return;
    }
  
    if (!authToken) {
      throw new Error("You must be authenticated to access this route.");
    }
  
    try {
      const decodedToken = verify(authToken, process.env.SECRET);
      if (decodedToken.userType !== "aprenant") {
        throw new Error("You are not authorized to access this route.");
      }
      req.aprenant = decodedToken;
      next();
    } catch (error) {
      throw new Error(`Authentication error: ${error.message}`);
    }
  };
  
