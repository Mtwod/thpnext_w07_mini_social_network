import { FETCH_REGISTER_FAILURE, FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS } from './userActions';

const registerInitialState = {
  loading: false,
  user: {
    username: '',
    email: '',
  },
  error: '',
};

const registerReducer = (state = registerInitialState, action) => {
  const { type, user, error } = action;

  switch (type) {
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user,
      };
    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default registerReducer;
