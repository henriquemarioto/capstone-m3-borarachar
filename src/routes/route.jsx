import useUser from "../providers/User";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

const Route = ({ isPrivate = false, children, home, ...rest }) => {
  const {
    user: { token },
  } = useUser();

  // true e true = ok (Component)
  // true e false = Login
  // false e true = Dashboard
  // false e false = ok (Component)

  return (
    <ReactDOMRoute {...rest}>
      {isPrivate === !!token || home ? (
        <>{children}</>
      ) : (
        <Redirect to={isPrivate ? "/login" : "/dashboard"} />
      )}
    </ReactDOMRoute>
  );
};

export default Route;
