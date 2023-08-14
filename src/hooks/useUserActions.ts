import { User, UserID, addNewUser, deleteUserById } from "../store/users/Slice";
import { useAppDispatch } from "./store";

export const useUserActions =()=>{
    
    const dispatch = useAppDispatch();
    
    const removeUser = (id:UserID)=>{
        dispatch(deleteUserById(id))
    }
    const addUser=({name,email,github}:User)=>{
        dispatch(addNewUser({name,email,github}))
    }
    return {removeUser,addUser}


}
