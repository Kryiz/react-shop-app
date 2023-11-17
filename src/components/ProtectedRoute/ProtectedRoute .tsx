import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({
    isAllowed = false,
    redirectPath = '/',
    children = null,
}) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />
}