import {createSlice} from "@reduxjs/toolkit"

let initialState={
  loggee:false,
  user:null
}

const userSlice= createSlice({
  name:"user",
  initialState,
  reducers:{
     loginUser(state,action){
        return{
          ...state,
          loggee:true,
          user:action.payload
        }
     },
     logoutUser(state,action){
       return{
         ...state,
         loggee:false,
         user:null

       }
     }
  }
})

export const {loginUser, logoutUser} = userSlice.actions
export default userSlice.reducer;
