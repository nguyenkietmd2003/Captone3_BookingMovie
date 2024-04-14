import { createSlice } from "@reduxjs/toolkit";
import { buyTicketThunk } from "./TicketThunk";

const initialState = {};

const TicketSlice = createSlice({
  name: "TicketSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buyTicketThunk.pending, (state, action) => {
        console.log("action pending");
      })
      .addCase(buyTicketThunk.fulfilled, (state, action) => {
        console.log("action.payload fullfill: ");
      })
      .addCase(buyTicketThunk.rejected, (state) => {
        console.log("action.reject");
      });
  },
});

export const { a } = TicketSlice.actions;

export default TicketSlice.reducer;