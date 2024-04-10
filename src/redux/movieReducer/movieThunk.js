import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieSer } from "../../service/movieService";

//

export const getListGheThunk = createAsyncThunk(
  "movieReducer/moviethunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await movieSer.getListGhe(payload);
      console.log("Data from screen page by MaLichChieu", data.data.content);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
