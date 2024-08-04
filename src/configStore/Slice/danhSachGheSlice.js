import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data/danhSachGhe.json";

const initialState = {
  data,
  gheDuocChon: [

  ],
  soGheDuocChon: ["A11"],
};

const danhSachGheSlice = createSlice({
  name: "danhSachGhe",
  initialState,
  reducers: {
    themGheDuocChon: (state, action) => {
      state.gheDuocChon = [...state.gheDuocChon, action.payload];
      state.soGheDuocChon = [...state.soGheDuocChon, action.payload.soGhe];
    },
    xoaGheDuocChon: (state, action) => {
      state.gheDuocChon = [...state.gheDuocChon];
      state.soGheDuocChon = [...state.soGheDuocChon];
      let index = state.gheDuocChon.findIndex(
        (item) => item.soGhe == action.payload.soGhe
      );
      if (index !== -1) state.gheDuocChon.splice(index, 1);
      let index2 = state.soGheDuocChon.findIndex(
        (item2) => item2 == action.payload.soGhe
      );
      if (index2 != -1) state.soGheDuocChon.splice(index2, 1);
    },
  },
});

export const { themGheDuocChon, xoaGheDuocChon } = danhSachGheSlice.actions;

export default danhSachGheSlice.reducer;
