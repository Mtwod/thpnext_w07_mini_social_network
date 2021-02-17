/* eslint-disable react/jsx-props-no-spreading */
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (routeProps) => {
  const {
    condition,
    redirectionPath,
    component: Component,
    ...rest
  } = routeProps;

  return (
    <Route
      {...rest}
      render={(props) => (
        condition() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: redirectionPath }} />
        )
      )}
    />
  );
};

export default PrivateRoute;
