const BASE_URL = 'http://localhost:1337';

const REGISTER = (data) => ({
  URL: `${BASE_URL}/auth/local/register`,
  METHOD: 'post',
  HEADERS: {
    'Content-Type': 'application/json',
  },
  BODY: JSON.stringify(data),
});

const LOGIN = (data) => ({
  URL: `${BASE_URL}/auth/local`,
  METHOD: 'post',
  HEADERS: {
    'Content-Type': 'application/json',
  },
  BODY: JSON.stringify(data),
});

const OWN_PROFILE = (token) => ({
  URL: `${BASE_URL}/users/me`,
  METHOD: 'get',
  HEADERS: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const EDIT_PROFILE = (token, data) => ({
  URL: `${BASE_URL}/users/me`,
  METHOD: 'put',
  HEADERS: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  BODY: JSON.stringify(data),
});

export {
  REGISTER,
  LOGIN,
  OWN_PROFILE,
  EDIT_PROFILE,
};
