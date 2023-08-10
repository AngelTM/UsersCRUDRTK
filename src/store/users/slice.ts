import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserID=string

export interface User{
    name:string;
    email:string;
    github:string;
}

export interface UserWithID extends User{
    id:UserID;
}

const initialState: UserWithID[]=[
    {
        id:"1",
        name: "Peter Doe",
        email:"peter@email.com",
        github:"pterdev"
      },
      {
          id:"2",
          name: "hakon dalbert",
          email:"hack@email.com",
          github:"hackdev"
        },
        {
          id:"3",
          name: "rock howard",
          email:"rh99@email.com",
          github:"ReppukenDev"
        },
]

export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        deleteUserById:(state,action:PayloadAction<UserID>)=>{
            const id = action.payload;
            return state.filter((user)=>user.id !== id);
        }

    }
})

export default usersSlice.reducer
export const {deleteUserById} = usersSlice.actions