import { movieSer } from "../../service/movieService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const buyTicketThunk = createAsyncThunk(
  "ticketReducer/buyTicketThunk",
  async ({ payload, authorization }, { rejectWithValue }) => {
    try {
      const data = await movieSer.postDatVe({
        payload: payload,
        authorization: authorization,
      });
      return data;
    } catch (error) {
      console.log(error); // Log ra error thực sự
      return rejectWithValue(error.response.data);
    }
  }
);