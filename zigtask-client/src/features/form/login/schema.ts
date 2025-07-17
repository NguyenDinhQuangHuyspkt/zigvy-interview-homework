import { object, string } from "yup";
import { genMessRequired } from "../../../utils/mess.utils";

const MIN_LENGTH_PASSWORD = 6;
const MAX_LENGTH_PASSWORD = 20;

export const genSchemaFormLogin = (formLabel: { email: string; password: string}) => {
  return object().shape({
    email: string()
      .email(`${formLabel.email} không hợp lệ`)
      .typeError(`${formLabel.email}`)
      .required(genMessRequired(formLabel.email)),
    password: string()
      .min(MIN_LENGTH_PASSWORD, `${formLabel.password} phải có ít nhất 6 ký tự`)
      .max(MAX_LENGTH_PASSWORD, `${formLabel.password} không được quá 20 ký tự`)
      .typeError(`${formLabel.password}`)
      .required(genMessRequired(formLabel.password)),
  });
};
