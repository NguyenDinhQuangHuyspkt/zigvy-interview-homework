import Cookies from "js-cookie";
import { SSOCOOKIES } from "../../constanst/app.const";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const AuthRequirement = () => {
    const token = Cookies.get(SSOCOOKIES.access);
    const location = useLocation();

    return token
        ? <Outlet />
        : <Navigate to='/' state={{ from: location }} replace />;
};

export default AuthRequirement;
