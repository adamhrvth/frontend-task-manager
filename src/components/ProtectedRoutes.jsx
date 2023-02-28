import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ loggedIn, children }) => {
  const navigate = useNavigate();

  if (!loggedIn) {
    navigate("/");
    return;
  }

  return children;
};

export default ProtectedRoutes;