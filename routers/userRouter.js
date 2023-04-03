import  Express  from "express";
import  {adminAuthValidation}  from "../middelwares/jwt.js";
import  {createUser,logIn,logOut,
        deleteUser,updateUser, getAllUsers,deleteAllUsers  }
            from "../controllers/userController.js";



export const userRouter = Express.Router()

userRouter.post("/createUser",adminAuthValidation,createUser)
userRouter.post("/login",logIn )
userRouter.get("/logout",logOut )
userRouter.delete("/ deleteUser/:id",adminAuthValidation, deleteUser )
userRouter.patch("/updateUser/:id",adminAuthValidation, updateUser )
userRouter.get("/getUsers",adminAuthValidation, getAllUsers )
userRouter.delete("/deleteUsers",adminAuthValidation, deleteAllUsers )