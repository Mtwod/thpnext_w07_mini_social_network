/* eslint-disable arrow-body-style */
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
const FETCH_USER_FROM_COOKIE = 'FETCH_USER_FROM_COOKIE';

export {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_FROM_COOKIE,
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error,
  };
};

const fetchUserFromCookie = (user) => {
  return {
    type: FETCH_USER_FROM_COOKIE,
    user,
  };
};

export {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserFromCookie,
};
