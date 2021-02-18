import './style.scss';

const ProfilePost = ({ text, createdAt }) => (
  <div className="ProfilePost">
    <p className="ProfilePost__text">{text}</p>
    <p><small>{createdAt}</small></p>
  </div>
);

export default ProfilePost;
