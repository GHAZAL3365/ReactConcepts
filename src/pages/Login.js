import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup"; // it's for validation

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  console.log(formik)

  return (
    <div className="flex-center">
      <div className="form-container">
        <div>
          <h1 className="login-title">Login Page</h1>
          <p className="login-desc">Please enter your credentials to log in.</p>
        </div>

        <form>
          <div className="login-fields">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Your Email"
              className="login-inputs"
            />
          </div>
          <div className="login-fields">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter Your Password"
              className="login-inputs"
            />
          </div>

          <div className="login-fields">
            <button className="auth-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
