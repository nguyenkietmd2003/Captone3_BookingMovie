import { createSlice } from "@reduxjs/toolkit";
import { getListGheThunk } from "./movieThunk";

const initialState = {
  listGhe: [],
  listGheDangDat: [],
  sum: 0,
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    resetGhe: (state, action) => {
      state.listGheDangDat = [];
      state.sum = 0; // Đặt sum về 0 khi reset danh sách ghế
    },
    addGheAction: (state, action) => {
      let ghe = action.payload;
      let index = state.listGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (index !== -1) {
        state.listGheDangDat.splice(index, 1);
      } else {
        state.listGheDangDat.push(ghe);
      }
      let sum = 0;
      state.listGheDangDat.forEach(function (item) {
        sum += item.giaVe;
      });
      state.sum = sum;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListGheThunk.fulfilled, (state, action) => {
      let infoScreenPage = action.payload;
      let listGhe = infoScreenPage.danhSachGhe.slice(0, 80);
      state.listGhe = listGhe;
    });
  },
});

export const { addGheAction, resetGhe } = movieSlice.actions;

export default movieSlice.reducer;
