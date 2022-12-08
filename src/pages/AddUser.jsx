import React from "react";
import state from "../state";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { userActions } from "../store/userSlice";
import { useDispatch } from "react-redux";

const schema = yup
  .object({
    username: yup.string().required("Enter username"),
    email: yup.string().required("Enter valid email id "),
    phone: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError("Enter valid 10 digit phone number"),

    dob: yup.string(),
    state: yup.string(),
  })
  .required();

const AddUser = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(userActions.AddUser(data));

    alert("User has been added");

    reset();
  };

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
      }}
      className="mt-4 p-5 addSection"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-evenly">
          <label className="me-4">Username</label>
          <input type={"text"} placeholder={"John"} {...register("username")} />
        </div>
        <p style={{ color: "red" }} className="text-center">
          {errors.username?.message}
        </p>

        <div className="mt-4 d-flex justify-content-evenly">
          <label className="me-4">Email</label>
          <input
            type={"email"}
            placeholder={"John@gmail.com"}
            {...register("email")}
          />
        </div>
        <p style={{ color: "red" }} className="text-center">
          {errors.email?.message}
        </p>

        <div className="mt-4 d-flex justify-content-evenly">
          <label className="me-4">Phone</label>
          <input
            type={"phone"}
            placeholder={"123456789"}
            {...register("phone")}
          />
        </div>
        <p style={{ color: "red" }} className="text-center">
          {errors.phone?.message}
        </p>

        <div className="mt-4 d-flex justify-content-evenly">
          <label className="me-4">DOB</label>
          <input type={"date"} {...register("dob")} />
        </div>

        <div className="mt-4 d-flex justify-content-evenly">
          <label className="me-4">State</label>

          <select {...register("state")}>
            {state.map((ele) => (
              <option value={ele} key={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 d-flex justify-content-evenly">
          <button type="submit">Create User</button>
        </div>
      </form>
    </section>
  );
};

export default AddUser;
