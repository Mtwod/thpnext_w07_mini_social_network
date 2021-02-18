/* eslint-disable react/jsx-one-expression-per-line */
import Config from 'config';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

const Post = (props) => {
  const {
    username,
    text,
    createdAt,
    slug,
    id,
  } = props;

  const currentUser = useSelector((state) => state.info);

  const handleClick = () => {
    localStorage.setItem(Config.STORAGE_USER_ID_KEY, `${id}`);
  };

  return (
    <div className="Post">
      {currentUser.username && (
        <div>
          <Link
            to={`/user/${slug}`}
            className="Post__username"
            onClick={handleClick}
          >
            {username}
          </Link>
        </div>
      )}
      <p className="Post__text">{text}</p>
      <small>created at: {createdAt}</small>
    </div>
  );
};

export default Post;
