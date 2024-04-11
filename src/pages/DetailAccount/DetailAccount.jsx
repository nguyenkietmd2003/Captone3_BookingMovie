import React, { useEffect, useState } from "react";

const DetailAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [dataInfo, setDataInfo] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-center w-full h-screen pt-20">
        <div className="w-2/3 bg-gray-400 h-2/3 rounded-xl border p-16">
          <div className="mb-5 text-center">
            <input
              type="text"
              className="w-2/3 border rounded h-9"
              placeholder="Username"
              name="taikhoan"
              value={dataInfo.taiKhoan || ""}
            />
          </div>
          <div className="mb-5 text-center relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-2/3 border rounded h-9 pr-9"
              name="matkhau"
              value={dataInfo.matKhau || ""}
            />
            <button
              className="absolute inset-y-0 right-0 px-3 bg-gray-200 text-gray-600 border-l border-gray-300 rounded-r h-full"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="mb-5 text-center">
            <input
              type="text"
              className="w-2/3 border rounded h-9"
              placeholder="Email"
              name="email"
              value={dataInfo.email || ""}
            />
          </div>
          <div className="mb-5 text-center">
            <input
              type="text"
              className="w-2/3 border rounded h-9"
              placeholder="Full Name"
              name="hoTen"
              value={dataInfo.hoTen || ""}
            />
          </div>
          <div className="mb-5 text-center">
            <input
              type="text"
              className="w-2/3 border rounded h-9"
              placeholder="Phone Number"
              name="soDT"
              value={dataInfo.soDT || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAccount;
