import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  themGheDuocChon,
  xoaGheDuocChon,
} from "../configStore/Slice/danhSachGheSlice";
const GheNgoi = () => {
  const { data, soGheDuocChon } = useSelector(
    (state) => state.danhSachGheSlice
  );
  const dispatch = useDispatch();
  const handleClick = (item) => {
    soGheDuocChon.findIndex((ghe) => ghe == item.soGhe) == -1
      ? dispatch(themGheDuocChon(item))
      : dispatch(xoaGheDuocChon(item));
  };
  return (
    <div className=" col-lg-8 d-flex justify-content-center flex-column align-items-center">
      <h3 className="fs-2">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
      <p className="fs-5 m-0 text-white">Màn Hình</p>
      <div className="screen"></div>
      <div className="">
        <table className="mt-3">
          {data.map((item, index) => {
            return (
              <>
                <tr>
                  <td className="firstChar">{item.hang}</td>
                  {item.hang == ""
                    ? item.danhSachGhe.map((item, index) => {
                        return (
                          <td className="firstChar">
                            <div>
                              <span>{item.soGhe}</span>
                            </div>
                          </td>
                        );
                      })
                    : item.danhSachGhe.map((item, index) => {
                        return (
                          <>
                            <td className="rowNumber">
                              <div
                                onClick={() => {
                                  handleClick(item);
                                }}
                                className={`${
                                  item.daDat ? "borderChoosed" : "borderNumber"
                                } ${
                                  soGheDuocChon.findIndex(
                                    (ghe) => ghe == item.soGhe
                                  ) != -1
                                    ? "activeChoosed"
                                    : ""
                                }`}
                              >
                                <span>{item.soGhe}</span>
                              </div>
                            </td>
                          </>
                        );
                      })}
                </tr>
              </>
            );
          })}
        </table>
      </div>
      <div className="guide mt-5 d-flex gap-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="borderNumber px- py-4"></div>
          <p className="text-white">Ghế Thường</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="borderChoosed p-4"></div>
          <p className="text-white">Ghế Đã Đặt</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="borderNumber activeChoosed p-4"></div>
          <p className="text-white">Ghế Đang Chọn</p>
        </div>
      </div>
    </div>
  );
};

export default GheNgoi;
