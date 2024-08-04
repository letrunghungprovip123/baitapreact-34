import { configureStore } from '@reduxjs/toolkit'
import danhSachGheSlice from './Slice/danhSachGheSlice'
export const store = configureStore({
  reducer: {
    hoTen: () => {
        return "Le Trung Hung"
    },
    danhSachGheSlice,
  },
})