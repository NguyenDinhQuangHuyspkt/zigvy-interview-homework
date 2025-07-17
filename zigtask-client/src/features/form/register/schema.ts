import { object, string } from "yup";
import { genMessRequired } from "../../../utils/mess.utils";
import { EMaxLength, EMinLength } from "../../../constanst/app.const";

export const genSchemaFormRegister = (formLabel: { email: string; password: string, repeatPassword: string}) => {
  return object().shape({
    email: string()
      .email(`${formLabel.email} không hợp lệ`)
      .typeError(`${formLabel.email}`)
      .required(genMessRequired(formLabel.email)),
    password: string()
      .min(EMinLength.PASSWORD, `${formLabel.password} phải có ít nhất ${EMinLength.PASSWORD} ký tự`)
      .max(EMaxLength.PASSWORD, `${formLabel.password} không được quá ${EMaxLength.PASSWORD} ký tự`)
      .typeError(`${formLabel.password}`)
      .required(genMessRequired(formLabel.password)),
    repeatPassword: string()
      .oneOf([require('yup').ref('password')], 'Không khớp với mật khẩu')
      .typeError(`${formLabel.repeatPassword}`)
      .required(genMessRequired(formLabel.repeatPassword)),
  });
};
