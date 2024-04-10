import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getListGheThunk } from '../../../redux/movieReducer/movieThunk';
import { addGheAction } from '../../../redux/movieReducer/movieSlice';
import { useNavigate } from 'react-router-dom';
import { resetGhe } from '../../../redux/movieReducer/movieSlice';



const ListGhe = ({maLichChieu}) => {

 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {listGhe, listGheDangDat } = useSelector((state)=>
    state.movieReducer
  )
  useEffect(()=>{
    dispatch(getListGheThunk(maLichChieu));
  },[]);

  const renderListGhe = () => {
    return listGhe.map((ghe, i) => {
      let style = '';
      let isDisabled = false;
      let styleGhe = 'bg-blue-300';
      let styleGheDangDat = 'bg-red-500';
      let styleGheDaDat = 'bg-gray-300';
      style = styleGhe;
      let index = listGheDangDat.findIndex(
        (gheDangDat) => ghe.maGhe === gheDangDat.maGhe,
      );
      if (index !== -1) {
        style = styleGheDangDat;
      }
      if (ghe.daDat) {
        style = styleGheDaDat;
        isDisabled = true;
      }
      return (
        <button key={i}
          disabled={isDisabled}
          onClick={() => {
            dispatch(addGheAction(ghe));
          }}
          className={`border-4 rounded-xl p-2 ${style} text-gray font-medium ${
            isDisabled ? 'cursor-not-allowed' : ''
          }`}
        >
          {ghe.tenGhe}
        </button>
      );
    });
  };
  return (
    <>
    <div className='w-full flex justify-center items-center'>
    <div className='w-3/5 container'>
      <button className='underline font-bold cursor-pointer mb-2' onClick={()=>{
        navigate(`/`);
        dispatch(resetGhe())
      }}>Quay Lại Trang Home</button>
      <div className='bg-green-600 text-white font-bold text-center mb-7'>Màn Hình Chiếu</div>
      <div className='grid grid-cols-10 gap-3'>
        {renderListGhe()}
      </div>
    </div>
  </div>
  </>
  )
}

export default ListGhe