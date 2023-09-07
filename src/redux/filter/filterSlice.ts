import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterState } from "./types";

const initialState: FilterState = {
  categoryId: 0,
  search: ''
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    }
  }
})

export const { setCategoryId, setSearch } = filterSlice.actions

export default filterSlice.reducer;