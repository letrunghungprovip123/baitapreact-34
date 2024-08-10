import React from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { xoaGheDuocChon } from "../configStore/Slice/danhSachGheSlice";
const ChiTietVe = () => {
  const { gheDuocChon } = useSelector((state) => state.danhSachGheSlice);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Số Ghế",
      dataIndex: "soGhe",
      key: "soGhe",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giá",
      dataIndex: "gia",
      key: "gia",
      render: (text) => (
        <p>
          {text.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      ),
    },  
    {
      title: "Hủy vé",
      dataIndex: "daDat",
      key: "daDat",
      render: (text, record, index) => {
        return (
          <>
            <span onClick={() => dispatch(xoaGheDuocChon(record))}>Delete</span>
          </>
        );
      },
    },
  ];
  const data = [];
  gheDuocChon.map((item, index) => {
    data.push(item);
  });
  let tongTien = data.reduce((tong, item, index) => {
    return (tong += item.gia);
  }, 0);
  return (
    <div className="col-lg-4 chiTietVe">
      <div className="text-center">
        <h2 className="mt-5 mb-3">CHI TIẾT VÉ</h2>
        <img
          src="https://m.media-amazon.com/images/I/81FQBhYvaxL._AC_UF1000,1000_QL80_.jpg"
          alt=""
          width={170}
          className="mb-3"
        />
        <h4>DEADPOOL & WOLVERINE</h4>
        <p>Suất chiếu : 12:00 | 4-8-2024</p>
        <p>BHD Start - Vincom 3/2</p>
        <p>Rạp: 05 | Phòng: A2</p>
        <Table columns={columns} dataSource={data} />;
        <div className="d-flex">
          <h4 className="">
            Tổng tiền:{" "}
            {tongTien.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </h4>
        </div>
        <div>
          <button className="w-100 btn btn-primary py-3 mt-4">
            Thanh Toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChiTietVe;
