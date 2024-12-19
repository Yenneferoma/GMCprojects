import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../pages/HomePage";
import BlogsPage from "../pages/BlogsPage";
import AuthPage from "../pages/AuthPage";
import AboutPage from "../pages/AboutPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import NotFoundErrorPage from "../pages/NotFoundErrorPage";
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";
import ResetPassword from "../components/auth/ResetPassword";
import Verification from "../components/auth/Verification";
import DashBoardPage from "../pages/DashoardPage";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  const { user } = useSelector((state) => state.userState);
  return (
    <Routes>
      <Route path="*" element={<NotFoundErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs/:blogId" element={<BlogDetailsPage />} />
      <Route path="/get-started" element={<AuthPage />}>
        <Route path="login" element={<Signin />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="/get-started/reset-password" element={<ResetPassword />} />
        <Route path="/get-started/verify-account" element={<Verification />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes user={user}>
            <DashBoardPage />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
