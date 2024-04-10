import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="relative py-5 flex flex-col items-center bg-gray-500 overflow-hidden md:py-40 h-screen/6">
        <div className="relative z-[1] container m-auto  md:px-12">
          <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
              <div className="w-full  flex justify-between text-gray-300 sm:w-7/12 md:justify-start">
                <div className="w-2/3 rounded border">
                  <p className="rounded border text-center text-2xl font-bold underline text-green-500">Movie.org</p>
                  <p className="py-1 text-center">Xem Phim Bộ Mới | Phim Thuyết Minh | Phim HD VietSub mới nhất được cập nhật liên tục.</p>
                  <p className="py-1 text-center">TraPhim.org - Xem phim không quảng cáo. Phim được thành viên tổng hợp từ nhiều nguồn trên internet với mục đích sưu tầm chia sẻ phi lợi nhuận.</p>
                </div>
                <ul className="list-disc list-inside">
                  <li><button className="hover:text-sky-400 transition">Home</button></li>
                  <li><button className="hover:text-sky-400 transition">About</button></li>
                  <li><button className="hover:text-sky-400 transition">Guide</button></li>
                  <li><button className="hover:text-sky-400 transition">Terms of Use</button></li>
                </ul>
                <ul className="space-y-8">
                  <li>
                    <button className="flex items-center space-x-3 hover:text-sky-400 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      <span>Github</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold text-center text-green-500 underline mt-10">
          <p>Liên Hệ Tại: <a href="https://www.cgv.vn/home/">https://www.cgv.vn/home/</a></p>
        </div>
      </footer>
    );
  } 
}
