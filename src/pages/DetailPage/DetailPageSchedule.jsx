import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { movieSer } from "../../service/movieService";
import { NavLink } from "react-router-dom";

const DetailPageSchedule = ({ idMovie }) => {
  //   React redux
  const [dataHeThongRap, setDataHeThongRap] = useState([]);
  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      let data = await movieSer.getScheduleMovie(idMovie);
      let dataSchedule = data.data.content.heThongRapChieu;
      setDataHeThongRap(dataSchedule);
    } catch (err) {}
  };
  const renderHeThongRap = () => {
    if(dataHeThongRap.length === 0){
      return [{
        key: 1,
        label: <span>Hiện tại chưa có lịch chiếu</span>,
        children:<span>Hiện tại chưa có lịch chiếu</span>,
      }]
    }else
    return dataHeThongRap.map((data, i) => {
      return {
        key: i,
        label: <img src={data.logo} alt="..." srcset="" className="h-20"/>,
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

  return (
    <div className="container mx-auto max-w-7xl py-8">
      <Tabs 
        defaultActiveKey="1"
        items={renderHeThongRap()}
        tabPosition={"left"}
      />
    </div>
  );
};

export default DetailPageSchedule;
