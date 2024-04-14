const App = () => {
  return (
    <div className="flex justify-center items-center text-center bg-gray-200 mt-8">
        <div className="col basis-8/12 md:basis-6/12 px-8">
          <div className="downloadapp__text">
            <h3 className="font-semibold text-center text-xl lg:text-2xl pb-4">
              Ứng dụng tiện lợi dành cho người yêu điện ảnh.
            </h3>
            <p className="indent-1 text-base font-semibold leading-5 my-2 lg:my-5">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
          </div>
          <div className="dowloadapp__actions flex flex-col items-center">
            <button className="text-white font-medium uppercase py-2 px-8 my-2 md:my-4 rounded-md bg-red-600 hover:-translate-y-1 duration-300 hover:bg-red-700">
              App miễn phí, tải về ngay
            </button>
            <p className="text-xs md:text-base">
              <span className="text-red-600 font-semibold">Tixket box</span> có
              hai phiên bản:<span className="mx-2 italic">IOS</span>và
              <span className="mx-2 italic">Android</span>
            </p>
          </div>
        </div>
    </div>
  );
};
export default App;