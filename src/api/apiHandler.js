const BASE_URL = 'http://localhost:1337';

// USER

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

// POSTS

const CREATE_POST = (token, data) => ({
  URL: `${BASE_URL}/posts`,
  METHOD: 'post',
  HEADERS: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  BODY: JSON.stringify(data),
});

const GET_POSTS = {
  URL: `${BASE_URL}/posts?_sort=created_at%3Adesc`,
  METHOD: 'get',
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

const POSTS_COUNT = (token) => ({
  URL: `${BASE_URL}/posts/count`,
  METHOD: 'get',
  HEADERS: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export { CREATE_POST, GET_POSTS, POSTS_COUNT };
