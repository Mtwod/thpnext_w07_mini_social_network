/* eslint-disable react/jsx-one-expression-per-line */
import { OWN_PROFILE } from 'api/apiHandler';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthenticationCookie } from 'utils/cookieUtils';
import { fetchUserFromCookie } from 'store/user/userActions';
import { useEffect } from 'react';
import './style.scss';

const Profile = () => {
  const currentUser = useSelector((state) => (state));
  const { info } = currentUser;
  const { username, email, description } = info;
  const dispatch = useDispatch();

  const fetchOwnProfile = async () => {
    const token = getAuthenticationCookie();

    const {
      URL,
      METHOD,
      HEADERS,
    } = OWN_PROFILE(token);

    const response = await fetch(URL, {
      method: METHOD,
      headers: HEADERS,
    });

    const data = await response.json();

    const user = {
      username: data.username,
      email: data.email,
      description: data.description,
    };

    dispatch(fetchUserFromCookie(user));
  };

  useEffect(() => {
    fetchOwnProfile();
  }, []);

  return (
    <div className="Profile">
      <h1 className="Profile__title">My profile</h1>
      <div className="Profile__info">
        <p className="Profile__username">username: {username}</p>
        <p className="Profile__email">email: {email}</p>
        <p className="Profile__description">
          description:&nbsp;
          {!description && (
            'No description…'
          )}
          {description && (
            description
          )}
        </p>
      </div>
    </div>
  );
};

export default Profile;
