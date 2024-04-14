import { http } from "./urlConfig";

export const userService = {
  postLogin: (data) => {
    let url = "/api/QuanLyNguoiDung/DangNhap";
    return http.post(url, data);
  },
  postSignup:(data) => {
    let uri= '/api/QuanLyNguoiDung/DangKy'
    return http.post(uri,data)
  },
  postInfoAccount: (data) => {
    let uri = "/api/QuanLyNguoiDung/ThongTinTaiKhoan";
    return http.post(uri, undefined, {
      headers: {
        Authorization: data,
      },
    });
  },
};
