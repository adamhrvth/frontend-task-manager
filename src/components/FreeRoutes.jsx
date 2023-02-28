import { useNavigate} from "react-router-dom";

const FreeRoutes = ({ loggedIn, children }) => {
  const navigate = useNavigate();

  if (loggedIn) {
    return navigate("/");
  }

  return children;
};

export default FreeRoutes;