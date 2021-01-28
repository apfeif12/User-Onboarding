import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
  .required("Name required")
  .min(3,"must be atleast 3 characters"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("you must enter a email address"),
  password: Yup.string()
  .min(8, "Passwords must be 8 characters or more"),
  tos: Yup.boolean().oneOf([true], "You must accept ToS"),
});

