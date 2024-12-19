import { useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import AppRoutes from "./AppRoutes";
import { SEO } from "../helpers/SEO";

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;

  // Define a mapping of paths to their metadata
  const seoData = {
    "/": {
      title: "Blog Client | Home Page",
      metaDescription:
        "The number one blog for tech enthusiasts and developers",
    },
    "/blogs": {
      title: "Blog Client | Blogs Page",
      metaDescription:
        "Explore various blogs for tech enthusiasts and developers",
    },
    "/about": {
      title: "Blog Client | About Page",
      metaDescription: "Learn more about Blog Client and its mission",
    },
    "/get-started": {
      title: "Blog Client | Get Started Page",
      metaDescription: "Join the Blog Client community today",
    },

    "/get-started/login": {
      title: "Blog Client | Login Page",
      metaDescription: "Login to your Blog Client account",
    },
    "/get-started/sign-up": {
      title: "Blog Client | Sign Up Page",
      metaDescription: "Create a Blog Client account today",
    },
    "/get-started/reset-password": {
      title: "Blog Client | Reset Password Page",
      metaDescription: "Reset your Blog Client account password",
    },
    "/get-started/verify-account": {
      title: "Blog Client | Verify Account Page",
      metaDescription: "Verify your Blog Client account",
    },

    "/dashboard": {
      title: "Blog Client | Dashboard Page",
      metaDescription: "Manage your blogs and account in the dashboard",
    },
  };

  // Determine SEO data based on pathname
  const defaultSEO = {
    title: "Blog Client | Not Found Page",
    metaDescription: "The requested page could not be found",
  };

  const dynamicSEO = pathname.includes("/blogs/")
    ? {
        title: "Blog Client | Blog Details Page",
        metaDescription: "Read insightful blog details and updates",
      }
    : seoData[pathname] || defaultSEO;

  // Set the SEO metadata
  SEO(dynamicSEO);

  return (
    <>
      <header className="fixed-top">
        <NavigationBar />
      </header>
      <main style={{ marginTop: "100px" }}>
        <AppRoutes />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
