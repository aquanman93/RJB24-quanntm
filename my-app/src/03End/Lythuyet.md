# Lý thuyết
1. Có bao nhiêu loại component? Liệt kê các component.

- 2 loại : Class component và Functional component

2. Nêu khái niệm của Props và State. So sánh Props và State. 

- Props là các biến, data được truyền từ component cha và có thể truy cập được ở cả các component con.
- State được khởi tạo và chỉnh sửa và chỉ có thể truy bởi chính bản thân component chứa nó.
So sánh:
- Cả state và props đều dùng để quản lý data bên trong một component.
    . Với props: Thông thường props được set bởi component cha và truyền vào component con và cố định trong suốt vòng đời. Do đó ta dùng props trong trường hợp cần trao đổi data giữa các component.
    . Với state: State có thể bị thay đổi nên nó thường được dùng để theo dõi sự thay đổi bên trong component và render lại.

4. HTTP Request là gì? Liệt kê các phương thức HTTP request.

HTTP request là thông tin được gửi từ client lên server, để yêu cầu server tìm hoặc xử lý một số thông tin, dữ liệu mà client muốn. HTTP request có thể là một file text dưới dạng XML hoặc Json mà cả hai đều có thể hiểu được.

Các phương thức:
- GET
- POST
- PUT
- PATCH
- DELETE
- HEAD

5. Sự khác biệt giữa Library và Framework là gì? Redux thuộc loại nào?

– Framework có thể hiểu là một khung chương trình, người dùng bổ sung code và tuân theo quy tắc để tạo ra ứng dụng. Còn Library chỉ cung cấp các chức năng tiện ích hay các class để sử dụng trong quá trình xây dựng ứng dụng.
-Redux là Library