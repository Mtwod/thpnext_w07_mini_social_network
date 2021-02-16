import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
  const title = 'M&C Social Network';

  return (
    <div className="Header">
      <Link to="/" className="Header__title">{title}</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Header;
