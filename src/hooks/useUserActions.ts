import { UserID, deleteUserById } from "../store/users/Slice";
import { useAppDispatch } from "./store";

export const useUserActions =()=>{
    
    const dispatch = useAppDispatch();
    
    const removeUser = (id:UserID)=>{
        dispatch(deleteUserById(id))
    }
    return {removeUser}

}
