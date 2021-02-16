/* eslint-disable arrow-body-style */
const FETCH_REGISTER_REQUEST = 'FETCH_REGISTER_REQUEST';
const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS';
const FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE';

export {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
};

const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST,
  };
};

const fetchRegisterSuccess = (user) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    user,
  };
};

const fetchRegisterFailure = (error) => {
  return {
    type: FETCH_REGISTER_FAILURE,
    error,
  };
};

export {
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,
};
