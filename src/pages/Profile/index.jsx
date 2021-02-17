/* eslint-disable react/jsx-one-expression-per-line */
import { OWN_PROFILE } from 'api/apiHandler';
import { useSelector } from 'react-redux';
import { getAuthenticationCookie } from 'utils/cookieUtils';
import { useEffect, useState } from 'react';
import './style.scss';
import EditProfile from './EditProfile';

const Profile = () => {
  const globalState = useSelector((state) => (state));
  const [editProfileUsername, setEditProfileUsername] = useState('');
  const [editProfileEmail, setEditProfileEmail] = useState('');
  const [editProfileDescription, setEditProfileDescription] = useState('');

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

    return {
      username: data.username,
      email: data.email,
      description: data.description,
    };
  };

  useEffect(async () => {
    const {
      username,
      email,
      description,
    } = await fetchOwnProfile();

    setEditProfileUsername(username);
    setEditProfileEmail(email);
    setEditProfileDescription(description || 'No description yet!');
  }, [globalState]);

  const handleChangeUsername = (event) => {
    setEditProfileUsername(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setEditProfileDescription(event.target.value);
  };

  return (
    <div className="Profile">
      <h1 className="Profile__title">My profile</h1>
      <EditProfile
        username={editProfileUsername}
        email={editProfileEmail}
        description={editProfileDescription}
        handleChangeUsername={handleChangeUsername}
        handleChangeDescription={handleChangeDescription}
      />
    </div>
  );
};

export default Profile;
