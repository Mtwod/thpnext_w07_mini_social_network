import { setAuthenticationCookie } from 'utils/cookieUtils';
import { LOGIN } from 'api/apiHandler';
import errorMessages from 'utils/errorUtils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFailure, fetchUserRequest, fetchUserSuccess } from 'state/user/userActions';
import LoginForm from './LoginForm';

const Login = () => {
  const stateUser = useSelector((state) => state);
  const loginDispatch = useDispatch();

  const fetchLogin = ({ identifier, password }) => async (dispatch) => {
    dispatch(fetchUserRequest());
    const loginData = {
      identifier,
      password,
    };

    const {
      URL,
      METHOD,
      HEADERS,
      BODY,
    } = LOGIN(loginData);

    const response = await fetch(URL, {
      method: METHOD,
      headers: HEADERS,
      body: BODY,
    });

    const data = await response.json();

    if (data.error) {
      dispatch(fetchUserFailure(errorMessages(data)));
    } else {
      const user = {
        username: data.user.username,
        email: data.user.email,
      };

      setAuthenticationCookie(data.jwt);
      dispatch(fetchUserSuccess(user));
    }
  };

  const handleLogin = (userData) => {
    loginDispatch(fetchLogin(userData));
  };

  return (
    <div className="Login">
      <h1 className="Login__title">Log in</h1>
      {stateUser.loading && (
        <p>SENDING REQUEST, PLEASE WAIT…</p>
      )}
      {stateUser.error && (
        <p>{stateUser.error}</p>
      )}
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
