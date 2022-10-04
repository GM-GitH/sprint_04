import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  if (user || localStorage.getItem("isLogin")) {
    return children ? children : <Outlet />;
  } else return <Navigate to="/login" />;;
};

export default PrivateRoute;
