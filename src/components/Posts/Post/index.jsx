/* eslint-disable react/jsx-one-expression-per-line */
import { useSelector } from 'react-redux';
import './style.scss';

const Post = ({ username, text, createdAt }) => {
  const currentUser = useSelector((state) => state.info);

  return (
    <div className="Post">
      {currentUser.username && (
        <p className="Post__username">{username}</p>
      )}
      <p className="Post__text">{text}</p>
      <small>created at: {createdAt}</small>
    </div>
  );
};

export default Post;
