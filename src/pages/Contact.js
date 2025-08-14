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
    <div className="flex flex-col items-center mt-12 max-w-[30rem] w-full mx-auto h-screen max-h-6/12">
      <div className=" border-[1.8px] shadow-md border-gray-300 dark:border-gray-600 w-full  rounded-lg  p-4 pb-6">
        <div className="dark:bg-gray-900">
          <h1 className="text-center text-amber-600 text-2xl font-medium">
            Contact Us
          </h1>
        </div>

        <form className="dark:bg-gray-900">
          <div className=" dark:bg-gray-900">
            <label className="font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter Your Name"
              className="login-inputs   bg-gray-200 dark:bg-gray-800"
            />
          </div>
          <div className="login-fields">
            <label className="font-semibold ">Email:</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Your Email"
              className="login-inputs bg-gray-200 dark:bg-gray-800 focus:border-amber-500"
            />
          </div>

          <div className="login-fields">
            <button className="auth-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
