import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ReactHookFormContainer } from "./style";
import { IForm } from "./interface";
import { useRef, useState } from "react";
import { TextField } from "@mui/material";

export default function ReactHookForm() {

  const inputRef = useRef<HTMLInputElement>(null); //sử dụng để lấy DOM

  const nameDefaultValues = {
    firstname: "",
    lastname: "",
  }

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: nameDefaultValues,
  });

  const classDefaultValues = {
    class: "",
    grade: "",
  };

  const {
    register: classReg,
    handleSubmit: classHandleSubmit,
  } = useForm<any>({
    defaultValues: classDefaultValues,
  });



  const submitName: SubmitHandler<IForm> = (data) => {
    getValues(); // lấy toàn bộ data trong handleSubmit 
    console.log("getValues", getValues());
    reset();

    console.log(data);
  };

  console.log(watch('firstname'));

  const getRef = () => {
    console.log(inputRef);

    console.log(inputRef.current?.value);

  }

  const submitClass: SubmitHandler<any> = (data) => {
    console.log(data);

  }

  return (
    <ReactHookFormContainer>
      <div className="introduce-rhf">
        {/** Controller dùng để bọc qua control chứ kp qua children, dùng để bọc input chứ kp là input.
         * input của thư viện dùng của controller.
         * name: phải đúng tên 
         * control: xác định xem khai báo ở đâu có thành phần trong name hay không thì mới xác định được data
         */}
      <Controller
        control={control}
        name="firstname"
        render={({ field }) => (
          <TextField {...field}/>
        )}
      /> 
        {/* <input type="text" {...register("firstname")} /> */}
        <input type="text" {...register("lastname", { required: true })} />
        {errors.lastname && <span>abc</span>}
        <button onClick={handleSubmit(submitName)} type="submit">Submit</button>
      </div>
      <div className="uncontrolled-component">
        <input type="text" ref={inputRef} />
        <button onClick={getRef} >Get ref</button>
      </div>
      <div className="class-form">
        <input type="text" {...classReg("class")} />
        <input type="text" {...classReg("grade")} />
        <button onClick={classHandleSubmit(submitClass)} >Class button</button>
      </div>
    </ReactHookFormContainer>
  )
}
