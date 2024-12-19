import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const AuthPage = () => {
  const { user } = useSelector((state) => state.userState);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  console.log(user);
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <Outlet />
        </div>
        <div className="col-lg-3"></div>
      </div>
    </section>
  );
};

export default AuthPage;
