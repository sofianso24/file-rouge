import  Express  from "express";
import  {adminAuthValidation}  from "../middelwares/jwt.js";
import  {createUser,logIn,logOut,updateUser, getAllUsers,
        deleteAllUsers, getAnUser, deleteAnUser  }
            from "../controllers/userController.js";



export const userRouter = Express.Router()

userRouter.post("/registration",createUser)
userRouter.post("/login",logIn )
userRouter.get("/logout",logOut )
userRouter.patch("/updateUser/:id",adminAuthValidation,updateUser )
userRouter.get("/getUsers", adminAuthValidation,getAllUsers )
userRouter.get("/getAnUser/:id",adminAuthValidation, getAnUser )
userRouter.delete("/deleteUsers",adminAuthValidation,deleteAllUsers )
userRouter.delete("/deleteAnUser/:id",adminAuthValidation, deleteAnUser )