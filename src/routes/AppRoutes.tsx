import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/ui/LayoutHeader";

import Login from "@/pages/auth/LoginPage";
import { DashboardPage } from "@/pages/protected/admin/DashboardPage";
import TesPage from "@/pages/protected/admin/TestPage";
import NotFound from "@/pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import UserPage from "@/pages/protected/admin/UserPage";
import HomePage from "@/pages/protected/view/HomePage";

const router = createBrowserRouter([
  // Public Routes (tanpa Layout)
  {
    element: <PublicRoute />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
    ],
  },

  // Protected Admin Routes (dengan Layout)
  {
    element: <ProtectedRoute requireAdmin={true} />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/admin/dashboard", element: <DashboardPage /> },
          { path: "/admin/users", element: <UserPage /> },
          { path: "/admin/test", element: <TesPage /> },
          // Tambahkan route admin lainnya di sini
        ],
      },
    ],
  },

  // Protected User Routes (dengan Layout)
  {
    element: <ProtectedRoute requireAdmin={false} />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/dashboard", element: <HomePage /> },
          // Tambahkan route user lainnya di sini
        ],
      },
    ],
  },

  // 404 Page
  { path: "*", element: <NotFound /> },
]);

export const AppRoutes = () => <RouterProvider router={router} />;