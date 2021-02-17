import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogOut } from 'state/user/userActions';
import { removeAuthenticationCookie } from 'utils/cookieUtils';
import './style.scss';

const Header = () => {
  const currentUser = useSelector((state) => (state.info));
  const { username } = currentUser;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    removeAuthenticationCookie();
    dispatch(userLogOut());
  };

  return (
    <div className="Header">
      <Link to="/" className="Header__title">M&C Social Network</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/register">Register</Link>
      {username && (
        <div className="Header__loggedIn">
          <p>{username}</p>
          <button type="button" className="Header__loggedIn__logOut" onClick={handleLogOut}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
