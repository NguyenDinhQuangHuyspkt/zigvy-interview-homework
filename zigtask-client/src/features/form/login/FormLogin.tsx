import { FC, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TFormLogin } from "./type";
import clsx from "clsx";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import Link from "antd/es/typography/Link";
import { useFormik } from "formik";
import { genLabelFormLogin } from "./utils";
import { genSchemaFormLogin } from "./schema";
import { login } from "../../../services/auth/auth.svc";
import { IErrorObject, toastErrorHandler, toastSuccessHandler } from "../../../utils/toast.utils";
import { ESuccessCodes, SSOCOOKIES } from "../../../constanst/app.const";
import Cookies from "js-cookie";

const FormLogin : FC<TFormLogin>= (props) => {
  const navigate = useNavigate();

  const [loading, setIsLoading] = useState(false);

  const formLabel = useMemo(() => genLabelFormLogin(), []);

  const formLoginSchema = genSchemaFormLogin(formLabel)

  const handleNavigateRegister = () => {
    navigate("/register");
  };

  const handleSubmitLogin = async () => {
    try {
      setIsLoading(true);
      await formLoginSchema.validate(values);

      const res = await login(values);

      if(res.code === ESuccessCodes.SUCCESS){
        setIsLoading(false);
        toastSuccessHandler("Đăng nhập thành công!");
        Cookies.set(SSOCOOKIES.access,res.data.accessToken, { expires: 1 });
        navigate("/main")
      }

    } catch (err) {
      setIsLoading(false);
      toastErrorHandler(err as IErrorObject, 'Đăng nhập thất bại, vui lòng thử lại!');
    }
  };

  const formik = useFormik({
    initialValues: {
    email: "",
    password: "",
  },
    validationSchema: formLoginSchema,
    onSubmit: handleSubmitLogin,
  });

  const { values, errors } = formik;

  return (
    <form
      className={clsx(
        "h-auto min-w-60 flex flex-col items-center justify-center p-4 gap-4",
        props.className
      )}
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-2xl text-white font-bold text-center">
        ĐĂNG NHẬP
      </h1>

      <div className="w-full px-3 flex flex-col gap-2 justify-center items-center">
        <div className="text-md w-3/4 gap-2 flex flex-col items-start">
          <Input
            name="email"
            disabled={loading}
            type="text"
            className="font-quickSand mx-0 rounded-sm h-10"
            placeholder="Vui lòng nhập email"
            value={values.email}
            onChange={formik.handleChange}
          />

          <p className="text-red-400 text-sm text-start pl-1">
            { errors.email ? errors.email : ""}
          </p>
        </div>

        <div className="text-md w-3/4 gap-2 flex flex-col items-start">
            <Input
              name="password"
              className="text-md font-quickSand mx-0 rounded-sm h-10"
              type="password"
              disabled={loading}
              placeholder="Vui lòng nhập mật khẩu"
              onChange={formik.handleChange}
            />

            <p className="text-red-400 text-sm pl-1">
                { errors.password ? errors.password : ""}
            </p>
        </div>
        
      </div>

      <div className="flex gap-2 justify-center w-3/4 px-3">
        <Button   
          type='default'
          className="rounded-md"
          onClick={handleNavigateRegister}
        >
          <Link className="text-lg font-quickSand">
            Đăng ký
          </Link>
        </Button>

        <Button
          type="primary"
          onClick={handleSubmitLogin}
          disabled={loading}
          className="rounded-md text-lg font-quickSand"
        >
          {loading ? "Loading" : ""}
          Đăng nhập
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
