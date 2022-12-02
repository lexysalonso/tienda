import {createSlice} from "@reduxjs/toolkit"
import Storage from '../../hooks/Storage';
import  jwt_decode  from 'jwt-decode';
let initialState={
  loggee:false,
  user:null
}
const storage = Storage()

const userSlice= createSlice({
  name:"user",
  initialState,
  reducers:{
     loginUser(state,action){
         let token = storage.load(storage.Keys.auth)
         let user = jwt_decode(token)
         console.log("ver TOKEN", user)

        return{
          ...state,
          loggee:true,
          user:user.user
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
