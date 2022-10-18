import {createSlice} from "@reduxjs/toolkit"

let intinialState = {
   card:[]
}

const cardSlice = createSlice({
   name:"card",
   initialState: intinialState,
   reducers:{
       addToCard(state,action){
          return{
            ...state,
            card:[...state.card, action.payload]
          }
       }
   }
})

export const {addToCard} = cardSlice.actions

export default cardSlice.reducer 
