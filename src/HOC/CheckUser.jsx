import React, {  useEffect } from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { message } from "antd";

// 

const CheckUser = ({children}) => {

    const navigate = useNavigate();
    const { infoUser } = useSelector((state) => state.userReducer);
    useEffect(() => {
      if (!infoUser) {
        message.error("Vui lÒng đăng nhập để được đặt vé");
        navigate("/auth/login");
      }
      else {
      }
    }, [infoUser]);
  return (
    <div>{children}</div>
  )
}

export default CheckUser