import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filters from "./filter/filterSlice";
import furniture from "./furniture/furnitureSlice";
import cart from './cart/cartSlice';


export const store = configureStore({
   reducer: {
     filters,
     furniture, 
     cart
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()