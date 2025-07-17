import Cookies from "js-cookie";
import { SSOCOOKIES } from "../constanst/app.const";

export function getAccessTokenFromCookie() {
  const access_token = Cookies.get(SSOCOOKIES.access);
  return access_token;
}
