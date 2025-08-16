// import "./Login.css";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-800 border-[1px]  border-gray-200 dark:border-gray-500 max-w-[23rem] w-full  mx-auto mt-10 flex flex-col p-4 rounded-md shadow-md ">
      <div className="form-container ">
        <div>
          <h1 className="text-amber-600 font-semibold text-2xl mb-2">
            Contact Us
          </h1>
          <p className="mb-2 text-l text-gray-500 dark:text-gray-400">
            Please enter your credentials to log in.
          </p>
        </div>

        <form>
          <div className="flex flex-col  mb-2">
            <label className="font-normal text-gray-800 dark:text-gray-200">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Your Email"
              className="bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-sm text-sm"
            />
          </div>
          <div className="flex flex-col mb-2 ">
            <label className="font-normal text-gray-800 dark:text-gray-200">
              Password:
            </label>
            <input
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter Your Password"
              className="bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-sm text-sm"
            />
          </div>

          <div className="mt-6 mb-4">
            <button className="bg-amber-600 px-4 py-2 rounded-sm text-l font-semibold text-white w-full cursor-pointer hover:bg-amber-500 transition  ">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
