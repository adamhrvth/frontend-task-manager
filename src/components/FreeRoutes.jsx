import { Navigate } from "react-router-dom";

const FreeRoutes = ({ loggedIn, children }) => {
  if (loggedIn) {
    return (
      <Navigate to = "/" replace/>
    );
  }

  return children;
};

export default FreeRoutes;