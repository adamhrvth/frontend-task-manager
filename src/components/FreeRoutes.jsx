import { useNavigate} from "react-router-dom";

const FreeRoutes = ({ loggedIn, children }) => {
  const navigate = useNavigate();

  if (loggedIn) {
    navigate("/");
    return;
  }

  return children;
};

export default FreeRoutes;