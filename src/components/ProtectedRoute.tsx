import { useRecoilValue } from "recoil"
import { isAdminLoggedInState } from "../store/adminState"
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = () => {
    const isAdminLoggedIn = useRecoilValue(isAdminLoggedInState);

    return isAdminLoggedIn ? <Outlet /> : <Navigate to="login" replace />;
};