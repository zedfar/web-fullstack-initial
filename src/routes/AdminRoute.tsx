import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/auth";

export const AdminRoute = () => {
  const { user } = useAuthStore();
  console.log(user?.role);
  

  if (!user) return <Navigate to="/login" replace />;
  if (user.role?.name !== "admin") return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};
