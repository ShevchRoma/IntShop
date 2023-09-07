import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFurniture, IFurnitureParams } from "./types";


export const fetchFurniture = createAsyncThunk<IFurniture[], IFurnitureParams>(
  'furniture/fetchFurnitureStatus',
  async (params) => {
    const { category, sort, searchValue } = params;

    const { data } = await axios.get<IFurniture[]>(`https://645a30d395624ceb21fa6e8a.mockapi.io/mebli/mebli?category=${category}&sortBy=${sort}${searchValue}`)
    return data;
  },
);
