import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { movieSer } from "../../service/movieService";
import DetailPageSchedule from "./DetailPageSchedule";
import { useDispatch } from "react-redux";
import { Tabs } from "antd";

import {
  turnOffLoading,
  turnOnLoading,
} from "../../redux/loadingReducer/loadingSlice";

const DetailPage = () => {
  const { idMovie } = useParams();
  const [dataMovie, setDataMovie] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataHeThongRap, setDataHeThongRap] = useState([]); ///
  const dispatch = useDispatch();

  const fetchDetailMovie = async () => {
    dispatch(turnOnLoading());
    try {
      let data = await movieSer.getDetailMovie(idMovie);
      setDataMovie(data.data.content);
      setTimeout(() => {
        dispatch(turnOffLoading());
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailMovie();
    fetchSchedule();
  }, []);
  ///
  useEffect(() => {
    console.log(dataMovie);
  }, [dataMovie]);

  // Hàm mở modal
  const openModal = async () => {
    setIsModalOpen(true);
    await fetchSchedule(); // Fetch dữ liệu khi mở modal
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  //////

  const fetchSchedule = async () => {
    try {
      let data = await movieSer.getScheduleMovie(idMovie);
      let dataSchedule = data.data.content.heThongRapChieu;
      console.log(dataSchedule);
      setDataHeThongRap(dataSchedule);
    } catch (err) {
      console.log(err);
    }
  };

  const renderHeThongRap = () => {
    if (dataHeThongRap.length === 0) {
      return [
        {
          key: 1,
          label: <span>Hiện tại chưa có lịch chiếu</span>,
          children: <span>Hiện tại chưa có lịch chiếu</span>,
        },
      ];
    } else
      return dataHeThongRap.map((data, i) => {
        return {
          key: i,
          label: <img src={data.logo} alt="..." className="h-20" />,
          children: renderCumRapChieu(data.cumRapChieu),
        };
      });
  };
  const renderCumRapChieu = (dataCumRapChieu) => {
    return dataCumRapChieu?.map((data, index) => {
      return (
        <div className="p-3 border my-5" key={index}>
          <p className="text-xl">{data.tenCumRap}</p>
          <div className="py-3">{renderLichChieuPhim(data.lichChieuPhim)}</div>
        </div>
      );
    });
  };
  const renderLichChieuPhim = (dataLcp) => {
    return dataLcp?.map((data, index) => {
      return (
        <NavLink
          to={`/screen-movie/${data.maLichChieu}`}
          className="border p-2 mr-3 mt-2 border-red-500 rounded-xl"
          key={index}
        >
          {data.ngayChieuGioChieu}
        </NavLink>
      );
    });
  };

  //////

  return (
    <div>
      <div className="bg-gray-700 px-3 py-4">
        <div className="flex">
          <div className="w-1/5">
            <img src={dataMovie?.hinhAnh} className="w-64 h-96" alt="" />
          </div>
          <div className="w-4/5 text-white space-y-4">
            <p className="text-xl font-medium">{dataMovie?.tenPhim}</p>
            <p className="text-sm">{dataMovie?.moTa}</p>
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={openModal}
            >
              Mua Vé
            </button>
          </div>
        </div>
      </div>

      <DetailPageSchedule idMovie={idMovie} />
      {/* Modal */}
      {isModalOpen && dataHeThongRap.length > 0 && (
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white p-8 rounded-lg">
            <div className="text-center text-2xl font-bold text-red-500">Lịch Chiếu</div>
            <Tabs
              defaultActiveKey="1"
              tabPosition="left"
              items={renderHeThongRap()}
            />
            <button
              class="block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={closeModal}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
