import { User, UserID, UserWithID, addNewUser, deleteUserById,updateUser } from "../store/users/Slice";
import { useAppDispatch } from "./store";

export const useUserActions =()=>{
    
    const dispatch = useAppDispatch();
    
    const removeUser = (id:UserID)=>{
        dispatch(deleteUserById(id))
    }
    const addUser=({name,email,github}:User)=>{
        dispatch(addNewUser({name,email,github}))
    }
    const editUser=(user:UserWithID)=>{
        dispatch(updateUser(user))
    }
    return {removeUser,addUser,editUser}


}
