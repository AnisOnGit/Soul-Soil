import { useContext } from "react";
import { AllContext } from "../provider/AllProvider";
// import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { loggedUser, loading } = useContext(AllContext);

  if (loading) {
    return <span className=" loading loading-bars loading-xl "></span>;
  }

  if (!loggedUser) {
    // toast.error("Login First");
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
