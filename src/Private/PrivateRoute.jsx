import { Navigate } from "react-router";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
