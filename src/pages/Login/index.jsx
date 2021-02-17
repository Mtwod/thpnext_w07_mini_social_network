import { setAuthenticationCookie } from 'utils/cookieUtils';
import { LOGIN } from 'api/apiHandler';
import errorMessages from 'utils/errorUtils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFailure, fetchUserRequest, fetchUserSuccess } from 'store/user/userActions';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import './style.scss';

const Login = () => {
  const globalState = useSelector((state) => state);
  const { info: currentUser, loading, error } = globalState;
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
        id: data.user.id,
        username: data.user.username,
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
      {loading && (
        <p>SENDING REQUEST, PLEASE WAIT…</p>
      )}
      {error && (
        <p>{error}</p>
      )}
      {currentUser.id && (
        <Redirect to={{ pathname: '/profile' }} />
      )}
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
