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

const DEFAULT_STATE: UserWithID[]=[
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
        }
]

const initialState: UserWithID[] =(()=>{
    const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        deleteUserById:(state,action:PayloadAction<UserID>)=>{
            const id = action.payload;
            return state.filter((user)=>user.id !== id);
        },
        addNewUser:(state,action:PayloadAction<User>)=>{
            const id = crypto.randomUUID();
            return[...state,{id,...action.payload}]
        },
        updateUser:(state,action:PayloadAction<UserWithID>)=>{
            const id = action.payload.id;
            const stateWithoutUser = state.filter((user)=>user.id!==id)
            return[...stateWithoutUser,action.payload]
        },
        rollbackUser: (state, action: PayloadAction<UserWithID>) => {
			const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
			if (!isUserAlreadyDefined) {
				state.push(action.payload)
			}
		}

    },
})

export default usersSlice.reducer
export const {deleteUserById,addNewUser,rollbackUser,updateUser} = usersSlice.actions