import { useState } from "react";

import { useFormik } from "formik";
import { checkValidation } from "../utills/checkValidation";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errors, setErros] = useState({});

  const handleToggleForm = () => {
    setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    const errorsMessages = checkValidation(email, password);
    setErros(errorsMessages);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 border-[1px] border-gray-200 max-w-[23rem] w-full  mx-auto mt-20 flex flex-col p-4 rounded-md shadow-md ">
      <div className="form-container ">
        <div>
          <h1 className="text-amber-600 font-semibold text-2xl mb-2">
            {isLoginForm ? " Sign In" : "Sign Up"}
          </h1>
          <p className="mb-2 text-l text-gray-500">
            Please enter your credentials to log in.
          </p>
        </div>

        <form
          className=""
          onSubmit={(e) => {
            handleValidation(e);
          }}
        >
          {!isLoginForm && (
            <div className="flex flex-col  mb-2">
              <label className="font-normal text-gray-800">Name:</label>
              <input
                type="text"
                name="name"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter Your Name"
                className="bg-gray-200 px-4 py-3 rounded-sm text-sm"
              />
            </div>
          )}

          <div className="flex flex-col  mb-2">
            <label className="font-normal text-gray-800">Email:</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Your Email"
              className="bg-gray-200 px-4 py-3 rounded-sm text-sm"
            />
            <p className="text-red-500 text-sm">{errors.email}</p>
          </div>

          <div className="flex flex-col mb-2 ">
            <label className="font-normal texg-gray-800">Password:</label>
            <input
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter Your Password"
              className="bg-gray-200 px-4 py-3 rounded-sm text-sm"
            />
            <p className="text-red-500 text-sm">{errors.password}</p>
          </div>

          <div className="mt-8 mb-4">
            <button className="bg-amber-600 px-4 py-2 rounded-sm text-l font-semibold text-white w-full cursor-pointer hover:bg-amber-500 transition  ">
              {isLoginForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
        <p
          className="cursor-pointer text-l text-gray-600 text-left"
          onClick={handleToggleForm}
        >
          {isLoginForm ? "Not Registered ?" + " " : "Already Have a Account? "}
          <span className="font text-amber-600 font-normal">
            {isLoginForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
