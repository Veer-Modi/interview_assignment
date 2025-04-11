import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isLoggedIn = false;

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
