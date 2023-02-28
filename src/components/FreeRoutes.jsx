import { redirect  } from "react-router-dom";

const FreeRoutes = ({ loggedIn, children }) => {
  if (loggedIn) {
    return redirect("/");
  }

  return children;
};

export default FreeRoutes;