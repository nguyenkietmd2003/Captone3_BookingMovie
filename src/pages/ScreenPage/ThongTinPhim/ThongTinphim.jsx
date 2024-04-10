import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { movieSer } from '../../../service/movieService';


const ThongTinphim = ({maLichChieu}) => {
  let isDisabled = true;
    const [dataPhim,setDataPhim]= useState();
    const { listGheDangDat ,sum} = useSelector((state)=>
    state.movieReducer
  )

    const fetchDetailMovie = async () => {
        try {
          let data = await movieSer.getInformationTicket(maLichChieu);
          let dataFinal =data.data.content.thongTinPhim; 
          setDataPhim(dataFinal);
          console.log('data from information phim',dataFinal)

        } catch (error) {
          console.log(error);
        }
      };
      useEffect(()=>{
        fetchDetailMovie()
      },[])
    
      const renderListGhe = ()=>{
        return listGheDangDat.map((ghe)=>{
          return (
            <span className='text-red-800 font-bold'> {ghe.tenGhe + " ,"}</span>
          )
        })
      }
      const renderSum= ()=>{
        let price = sum * 1;
        if(price !== 0){
          isDisabled = false;
        }
        return <span className='text-red-800 font-bold'>{price + " vnd"}</span>;
      }
  return (
    <div className='container h-screen w-2/5'>
      <div className='flex justify-center items-center h-full'>
         <div className='rounded-xl border-2 text-white w-4/5'>
          <img src={dataPhim?.hinhAnh} alt="..." className='h-1/4' />
          <div className='rounded border text-gray-900'>Tên phim :<span className='text-white-800 font-bold text-xl'> {dataPhim?.tenPhim}</span></div>
            <div className='rounded border  text-gray-900'>Giờ Chiếu: <span className='text-white-800 font-bold text-sm'> {dataPhim?.gioChieu}</span></div>
            <div className='rounded border  text-gray-900'>Rạp : <span className='text-white-800 font-bold text-sm'> {dataPhim?.tenRap}</span> </div>
            <div className='rounded border'>
              <div className=' text-gray-900'>Số Ghế : {renderListGhe()}</div>
              <div className=' text-gray-900'>Tổng Tiền: {renderSum()} <button className={` ml-10 border-2  rounded-xl h-8 ${isDisabled ? "cursor-not-allowed  bg-yellow-200" : "bg-yellow-500"} `} disabled={isDisabled}>Thanh Toán</button> </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ThongTinphim