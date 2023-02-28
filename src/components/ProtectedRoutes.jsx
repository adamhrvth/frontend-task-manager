import { redirect } from "react-router-dom";

const ProtectedRoutes = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return redirect("/user/login");
  }

  return children;
};

export default ProtectedRoutes;