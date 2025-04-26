This is a [React.js](https://react.dev/) project bootstrapped and deployed successfully along with its backend server.

## Giới thiệu tổng quan dự án:
- Games Shop là một hệ thống web thương mại điện tử, tích hợp đầy đủ các công nghệ hiện đại, giao diện thân thiện người dùng, vận hành mượt mà từ frontend đến backend, sẵn sàng mở rộng quy mô trong tương lai.

## Link demo hệ thống:
- Link người dùng: [Games Shop Demo](https://game-shop-fe.vercel.app/)

> Backend server cũng đã được triển khai đầy đủ để hỗ trợ toàn bộ hệ thống frontend.

**Lưu ý:** Do hệ thống được deploy trên nền tảng Railway (backend) và Vercel (frontend), nên trong trường hợp lâu không có người truy cập, backend có thể tự động sleep để tiết kiệm tài nguyên. Vì vậy, lần đầu tiên truy cập sau thời gian dài có thể xảy ra lỗi tải dữ liệu (ví dụ: danh sách sản phẩm không load được). Vui lòng tải lại trang nếu gặp sự cố này. Các lần truy cập sau sẽ diễn ra bình thường.

## Getting Started Locally

Install:
```bash
npm install
```

Then, run the development server:
```bash
npm dev
```

## Phương án dự phòng khi server (backend) gặp sự cố:
Trong trường hợp server (backend) chính gặp sự cố hoặc không thể truy cập được, bạn có thể sử dụng backend dự phòng theo hướng dẫn sau:

- Truy cập vào repository backend backup tại: [Link repo backend backup](https://github.com/conghau2308/Game_Shop_BE_Backup.git)

- Làm theo hướng dẫn trong README của repository đó để khởi chạy backend trên máy local

## Data Test for VNPAY method
```
Ngân hàng: NCB
Số thẻ: 9704198526191432198
Tên chủ thẻ: NGUYEN VAN A
Ngày phát hành: 07/15
Mật khẩu OTP: 123456
```
Xem thêm thông tin thẻ test tại: [VNPAY Sandbox](https://sandbox.vnpayment.vn/apis/vnpay-demo/#th%C3%B4ng-tin-th%E1%BA%BB-test)

## Tài khoản mẫu:
Bạn có thể tạo tài khoản trên web hoặc có thể dùng tài khoản này với đầy đủ các thông tin để test hiển thị:

Email:
```bash
testuser@gmail.com
```

Password:
```bash
123456
```

## Một số điểm nổi bật của dự án
- Responsive hỗ trợ đa thiết bị: Desktop, Tablet, iPad, Mobile.
- Tích hợp cổng thanh toán VNPAY.
- Áp dụng kỹ thuật Skeleton Screen giữ bố cục giao diện ổn định khi loading.
- Phân chia cấu trúc project ReactJS chuẩn với các thư mục: `components/`, `pages/`, `hooks/`, `ultils/`, `helpers/`, `assets/`, `api/` ... giúp bảo trì và mở rộng dễ dàng trong tương lai.

---

**Lưu ý:** Dự án hiện vẫn đang trong quá trình phát triển thêm và điều chỉnh để tối ưu hóa trải nghiệm người dùng và nâng cấp tính năng. Do đó có một số tính năng trên trang web có thể không hoạt động đúng như mong muốn của người dùng.
