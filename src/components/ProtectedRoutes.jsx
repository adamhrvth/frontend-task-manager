import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ loggedIn, children }) => {
  const navigate = useNavigate();

  if (!loggedIn) {
    return navigate("/");
  }

  return children;
};

export default ProtectedRoutes;