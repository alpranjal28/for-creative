import { object, string, number, date, InferType, ref } from "yup";

const simplePasswordRules = /^(?=.*?[a-z]).{6,20}$/;

let userSchema = object().shape({
  name: string().required(),
  email: string().email("please enter valid email").required(),
  age: number().required().positive().integer(),
  password: string()
    .required("Required")
    .min(6)
    .max(20)
    .matches(simplePasswordRules, "Please create a stronger password"),
  confirmPassword: string()
    .required()
    .oneOf([ref("password")], "Passwords must match"),
  createdOn: date().default(() => new Date()),
});

type User = InferType<typeof userSchema>;

export default userSchema;
