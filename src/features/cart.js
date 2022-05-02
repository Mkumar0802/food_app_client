import { createSlice } from '@reduxjs/toolkit';



 export  const userSlice = createSlice({
     name:'user',
     initialState:{value:{name:'',price:'',photo:'',}},

     reducers:{
         cart:(state,action) => {
             state.value =action.payload
         }
     }
    
})


export const{cart} =userSlice.actions;
export default userSlice.reducer;