/* eslint-disable react/jsx-one-expression-per-line */
import { useSelector } from 'react-redux';
import RegisterForm from './RegisterForm';

const Register = () => {
  const globalState = useSelector((state) => state);

  return (
    <div className="Register">
      <h2>Sign up</h2>
      {globalState.loading && (
        <h2>SENDING REQUEST, PLEASE WAIT</h2>
      )}
      {globalState.user.username && (
        <p>You registered as {globalState.user.username}</p>
      )}
      <RegisterForm />
    </div>
  );
};

export default Register;
