import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themGheDuocChon } from "../configStore/Slice/danhSachGheSlice";
import GheNgoi from "./GheNgoi";
import ChiTietVe from "./ChiTietVe";
const BaiTapMovie = () => {
    const { gheDuocChon } = useSelector((state) => state.danhSachGheSlice)
  return (
    <>
      <div className="container-fluid bookingMovie bg-dark">
        <div className="content row">
          <GheNgoi/> 
          <ChiTietVe/>
        </div>
      </div>
    </>
  );
};

export default BaiTapMovie;
