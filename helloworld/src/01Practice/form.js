import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  return (
    // Hàm handleSubmit sẽ validate trước khi gọi hàm onSubmit
    <form onSubmit={handleSubmit}>
      {/* // đăng kí input cho Hook vói tên example */}
      <input defaultValue="test" {...register("example")} />
      {/* // đăng kí thẻ input với React-Hook-Form với tên "exampleRequired" //
      validate là required */}
      <input {...register("exampleRequired", { required: true })} />
      {/* // xử lý lỗi bằng errrors */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}

