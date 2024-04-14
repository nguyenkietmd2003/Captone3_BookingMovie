import { MA_NHOM, http } from "./urlConfig";

export const movieSer = {
  getBannerMovie: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return http.get(uri);
  },
  getListMovie: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`;
    return http.get(uri);
  },
  getDetailMovie: (id) => {
    let uri = `/api/QuanLyPhim/layThongTinPhim?MaPhim=${id}`;
    return http.get(uri);
  },
  getScheduleMovie: (idMovie) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
  getListGhe: (maLichChieu) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return http.get(uri);
  },
  getInformationTicket: (maLichChieu) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return http.get(uri);
  },
  layTatCaRapChieu: () => {
    let uri = "/api/QuanLyRap/LayThongTinHeThongRap";
    return http.get(uri);
  },
  layThongTinRapChieuheThong: (maRap) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap?maNhom=${MA_NHOM}`;
    return http.get(uri);
  },
  getTinTuc24h: () => {
    let uri = "https://60b9f19280400f00177b744b.mockapi.io/ArticlesDienAnh02";
    return http.get(uri);
  },
  getReview: () => {
    let uri = "https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesReview02";
    return http.get(uri);
  },
  getSale: () => {
    let uri = "https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesKhuyenMai02";
    return http.get(uri);
  },
  postDatVe: (data) => {
    let uri = "/api/QuanLyDatVe/DatVe";
    return http.post(uri, data.payload, {
      headers: {
        Authorization: ${data.authorization},
      },
    });
  },
};
