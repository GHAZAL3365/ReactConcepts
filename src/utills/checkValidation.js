export const checkValidation = (email, password) => {
  const errors = {};
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmailValid) {
    errors.email = "Email is not valid";
  }

  if (!isPasswordValid) {
    errors.password = "Password is not valid";
  }

  return errors;
};
