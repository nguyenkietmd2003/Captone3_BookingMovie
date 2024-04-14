import React from 'react'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'

const Notification = () => {
  const navigate = useNavigate();
  return (
    <div className='flex bg-gray-500 h-screen w-screen justify-center items-center rounded-sm'>
        <div className='h-1/4 w-1/4 bg-white text-center rounded-xl font-bold py-6'>
           <div className='mb-5 text-2xl'> Bạn đã thanh toán thành công</div>
           <div>
           <Button danger type='primary' onClick={()=>{navigate("/")}}>
                 Trang Chủ 
           </Button>
           <Button className='ml-5' type='primary' onClick={()=>{navigate("/detail-account")}}>
              Lịch sử Đặt vé
           </Button>
           </div>
        </div>
    </div>
  )
}

export default Notification