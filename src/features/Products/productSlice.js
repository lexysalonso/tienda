import {createSlice} from "@reduxjs/toolkit"

let initialState = {
  product:[],
  productFilter:[]
}

const ProductSlice = createSlice({
  name:"product",
  initialState,
  reducers:{
     addToProduct(state,action){
        return{
          ...state,
          product:[...action.payload] 
        }
     },
     addToProductFilter(state,action){
        return{
          ...state,
          productFilter:[...action.payload] 
        }
     }
  }
  
})

export const { addToProduct, addToProductFilter } = ProductSlice.actions;

export default ProductSlice.reducer