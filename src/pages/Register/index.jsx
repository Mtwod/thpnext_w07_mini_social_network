/* eslint-disable react/jsx-one-expression-per-line */
import errorMessages from 'utils/errorUtils';
import { setAuthenticationCookie } from 'utils/cookieUtils';
import { REGISTER } from 'api/apiHandler';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } from 'state/user/userActions';
import RegisterForm from './RegisterForm';

const Register = () => {
  const globalState = useSelector((state) => state);
  const registerDispatch = useDispatch();

  const fetchRegister = ({ username, email, password }) => async (dispatch) => {
    dispatch(fetchRegisterRequest());
    const registerData = {
      username,
      email,
      password,
    };

    const {
      URL,
      METHOD,
      HEADERS,
      BODY,
    } = REGISTER(registerData);

    const response = await fetch(URL, {
      method: METHOD,
      headers: HEADERS,
      body: BODY,
    });

    const data = await response.json();

    if (data.error) {
      dispatch(fetchRegisterFailure(errorMessages(data)));
    } else {
      const user = {
        username: data.user.username,
        email: data.user.email,
      };

      setAuthenticationCookie(data.jwt);
      dispatch(fetchRegisterSuccess(user));
    }
  };

  const handleRegistration = (userData) => {
    registerDispatch(fetchRegister(userData));
  };

  return (
    <div className="Register">
      <h1>Sign up</h1>
      {globalState.loading && (
        <p>SENDING REQUEST, PLEASE WAIT…</p>
      )}
      {globalState.error && (
        <p>{globalState.error}</p>
      )}
      <RegisterForm handleRegistration={handleRegistration} />
    </div>
  );
};

export default Register;
