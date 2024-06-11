import * as yup from "yup";

export const registerFormSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(12, "Username must be less than 12 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .max(12, "Password must be less than 12 characters")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must be alphanumeric, and contain max 12 characters, a capital letter and a special character"
    ),
  confirmPassword: yup
    .string()
    .required("Confirmation is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export type RegisterFormSchema = yup.InferType<typeof registerFormSchema>;
