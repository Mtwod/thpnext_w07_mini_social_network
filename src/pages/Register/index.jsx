/* eslint-disable react/jsx-one-expression-per-line */
import errorMessages from 'utils/errorUtils';
import { setAuthenticationCookie } from 'utils/cookieUtils';
import { REGISTER } from 'api/apiHandler';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } from 'state/user/userActions';
import RegisterForm from './RegisterForm';

const { URL, METHOD } = REGISTER;

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

    const response = await fetch(URL, {
      method: METHOD,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
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
      <h2>Sign up</h2>
      {globalState.loading && (
        <h2>SENDING REQUEST, PLEASE WAIT</h2>
      )}
      {globalState.user.username && (
        <p>You registered as {globalState.user.username}</p>
      )}
      {globalState.error && (
        <p>{globalState.error}</p>
      )}
      <RegisterForm handleRegistration={handleRegistration} />
    </div>
  );
};

export default Register;
