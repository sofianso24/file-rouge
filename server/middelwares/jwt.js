import jwtPackage from "jsonwebtoken";
const { sign, verify } = jwtPackage; 


export const createToken = (user) => {
  const authToken = sign(
    { _id: user._id, mail: user.mail, userRole: user.userRole },
    process.env.SECRET
  );

  return authToken;
};

export const adminAutorisation = (req, res, next) => {

    const authToken = req.cookies["auth-token"].authToken;
   
    if (!authToken) {
      return res.json("You are not authorized to access this route.");
    }

    const decodedToken = verify(authToken, process.env.SECRET);

    if (!decodedToken || decodedToken.userRole !== "admin") {
      return res.status(401).json({ message: "You are not authorized to access this route." });
    }

    res.locals.userId = decodedToken._id;
    next();
  
  };


  export const mentorAutorisation = (req, res, next) => {

    const authToken = req.cookies["auth-token"].authToken;

    if (!authToken) {
      return res.status(401).json({ message: "You must be authenticated to access this route." });
    }

      const decodedToken = verify(authToken, process.env.SECRET);
     
      if (!decodedToken || decodedToken.userRole !== "mentor") {
        return res.status(401).json({ message: "You are not authorized to access this route." });
      }
      res.locals.userId = decodedToken._id;
      next();
  
  };


  export const aprenantAutorisation = (req, res, next) => {

    // const authToken = req.cookies["auth-token"];
    const authToken = req.cookies["auth-token"].authToken;
   
    if (!authToken) {
      return res.status(401).json({ message: "You must be authenticated to access this route." });
    }
 
      const decodedToken = verify(authToken, process.env.SECRET);
  //  console.log(decodedToken);
      if (!decodedToken || decodedToken.userRole !== "aprenant") {
        return res.status(401).json({ message: "You are not authorized to access this route." });
      }
      
      res.locals.userId = decodedToken._id;
      next();
  
  };
  
