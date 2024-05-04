import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseAdmin from "../Hooks/UseAdmin";


const AdminRoutes = ({children}) => {
  const { user, loading } = UseAuth()
  const [ isAdmin, isAdminLoading ] = UseAdmin()
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;