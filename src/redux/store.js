import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer/userSlice";
import loadingSlice from "./loadingReducer/loadingSlice";
import movieSlice from "./movieReducer/movieSlice";
import buyTicketSlice from "./TicketReducer/TicketSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    loadingReducer: loadingSlice,
    movieReducer: movieSlice,
    ticketReducer: buyTicketSlice,
  },
});
