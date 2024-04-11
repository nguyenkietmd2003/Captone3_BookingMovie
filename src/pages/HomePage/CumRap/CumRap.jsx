import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { movieSer } from "../../../service/movieService";

const CumRap = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [cumrap, setCumRap] = useState([]);
  const [initialRender, setInitialRender] = useState(true);
  
  const handleTabChange = (key) => {
    setActiveKey(key);
    console.log(key, "key");
    if (!initialRender) {
      alert(`Đã chuyển đến tab có key là ${key}`);
    }
  };

  const fetchDataCumRap = async () => {
    try {
      let data = await movieSer.layTatCaRapChieu();
      let dataFinal = data.data.content;
      if (dataFinal) {
        setCumRap(dataFinal);
        console.log(dataFinal, "data final");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderCumRapTabs = () => {
    return cumrap.map((rap, index) => (
      <Tabs.TabPane
        key={index + 1}
        tab={<img src={rap.logo} className="h-[47px] w-[47px]" alt={`Hình ảnh của ${rap.tenheThongRap}`} />}
      />
    ));
  };

  useEffect(() => {
    fetchDataCumRap();
  }, []);
  
  useEffect(() => {
    if (cumrap.length > 0) {
      console.log(cumrap, "xxxxxx");
      if (initialRender) {

        setInitialRender(false);
      }
    }
  }, [cumrap]);

  return (
    <div className="bg-gray-100">
      <div className="font-bold text-2xl text-center">Danh Sách Cụm Rạp</div>
      <div className="flex justify-center items-center">
        <Tabs
          className="border border-black rounded w-3/5"
          tabPosition={"left"}
          defaultActiveKey="1"
          activeKey={activeKey}
          onChange={handleTabChange}
        >
          {cumrap.length > 0 && renderCumRapTabs()}
        </Tabs>
      </div>
    </div>
  );
};

export default CumRap;
