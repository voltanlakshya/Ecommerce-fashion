import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    name: [],

} 
 export const webSlice = createSlice({
    name: 'web',
    initialState,
    reducers : {
        addtodo: ()=>{}
    }
 })
  
 export const { } = webSlice.actions
 export default webSlice.reducer