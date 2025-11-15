import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/auth";

export const AuthRoute = () => {
    const { isAuthenticated, user } = useAuthStore();

    console.log(isAuthenticated);
    

    if (isAuthenticated) {
        return user?.role?.name === "admin"
            ? <Navigate to="/admin/dashboard" replace />
            : <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
};
