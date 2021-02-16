import { REGISTER } from 'api/apiHandler';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } from 'state/user/userActions';
import errorMessages from 'utils/errorUtils';
import './style.scss';

const { URL, METHOD } = REGISTER;

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerDispatch = useDispatch();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  // const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailRegex = /\S+@\S+\.\S+/;

  const isSubmitConditionValid = (
    username.length > 2
    && password.length > 5
    && emailRegex.test(email)
  );

  const fetchRegister = () => async (dispatch) => {
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
        token: data.jwt,
      };
      dispatch(fetchRegisterSuccess(user));
    }
  };

  const handleSubmit = async (event) => {
    if (isSubmitConditionValid) {
      event.preventDefault();
      registerDispatch(fetchRegister());
    }
  };

  return (
    <form className="RegisterForm">
      <input
        className="RegisterForm__username"
        type="text"
        name="username"
        minLength="3"
        value={username}
        onChange={handleChangeUsername}
        placeholder="Username"
        required
      />
      <input
        className="RegisterForm__email"
        type="email"
        name="email"
        value={email}
        onChange={handleChangeEmail}
        placeholder="Email"
        required
      />
      <input
        className="RegisterForm__password"
        type="password"
        name="password"
        minLength="6"
        value={password}
        onChange={handleChangePassword}
        placeholder="Password"
        required
      />
      <input type="submit" onClick={handleSubmit} value="Submit" />
    </form>
  );
};

export default RegisterForm;
