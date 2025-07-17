import { Outlet } from "react-router-dom";
import { getAccessTokenFromCookie } from "../../utils/auth.utils";
import Unauthorized from "./UnAuthorization";


export default function Authentication() {
  const accessToken = getAccessTokenFromCookie();

  if (accessToken) {
    return <Outlet />;
  }
  return <Unauthorized />;
}
