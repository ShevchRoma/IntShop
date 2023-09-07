import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FurnitureState, IFurniture, StatusEnum } from "./types";
import { fetchFurniture } from "./asyncActions";

const initialState: FurnitureState = {
 furniture: [],
 status: StatusEnum.LOADING
}

const furnitureSlice = createSlice({
   name: 'furniture',
   initialState,
   reducers:{
     setFurniture(state, action: PayloadAction<IFurniture[]>){
       state.furniture = action.payload
     }
   },
   extraReducers: (builder) =>{
     builder.addCase(fetchFurniture.pending, (state) =>{
       state.status = StatusEnum.LOADING;
       state.furniture = []
     });
    builder.addCase(fetchFurniture.fulfilled, (state, action) =>{
      state.furniture = action.payload;
      state.status = StatusEnum.SUCCESS
    });
    builder.addCase(fetchFurniture.rejected, (state, action) =>{
      state.furniture = [];
      state.status = StatusEnum.ERROR
    })
   }
})

export const { setFurniture } = furnitureSlice.actions

export default furnitureSlice.reducer;
