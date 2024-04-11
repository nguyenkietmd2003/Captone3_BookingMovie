import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/userReducer/userSlice";
import {useNavigate} from 'react-router-dom'

const UserNavLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { infoUser } = useSelector((state) => state.userReducer); //get infoUser
  const checkUserAndHistory = ()=>{
    navigate("detail-account");
  }
  return (
    <div className="space-x-3">
      <span className="cursor-pointer" onClick={()=>{
        checkUserAndHistory()
      }}>
      <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" className="h-10 w-14 inline" alt="..."  />
      <span className="text-gray-900 underline text-xl hover:text-red-500">{infoUser.hoTen}</span>
      </span>
      <button
        onClick={() => {
          dispatch(logOutAction());
        }}
        className="bg-red-400 text-white p-2 rounded"
      >
        Log out
      </button>
    </div>
  );
};

export default UserNavLogin;
