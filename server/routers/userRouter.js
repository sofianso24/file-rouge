import  Express  from "express";
import  {adminAutorisation}  from "../middelwares/jwt.js";
import  {createUser,logIn,logOut,updateUser, getAllUsers,
        deleteAllUsers, getAnUser, deleteAnUser  }
            from "../controllers/userController.js";



export const userRouter = Express.Router()

userRouter.post("/registration",createUser)
userRouter.post("/login",logIn )
userRouter.get("/logout",logOut )
userRouter.patch("/updateUser/:id",adminAutorisation,updateUser )
userRouter.get("/getUsers", adminAutorisation,getAllUsers )
userRouter.get("/getAnUser/:id",adminAutorisation, getAnUser )
userRouter.delete("/deleteUsers",adminAutorisation,deleteAllUsers )
userRouter.delete("/deleteAnUser/:id",adminAutorisation, deleteAnUser )