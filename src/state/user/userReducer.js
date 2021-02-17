import {
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_USER_FROM_COOKIE,
} from './userActions';

const currentUserInitialState = {
  loading: false,
  user: {
    username: '',
    email: '',
    description: '',
  },
  error: '',
};

const currentUserReducer = (state = currentUserInitialState, action) => {
  const { user: stateUser } = state;
  const { type, user: actionUser, error } = action;

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
        user: {
          ...stateUser,
          ...actionUser,
        },
      };
    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    case FETCH_USER_FROM_COOKIE:
      return {
        ...state,
        loading: false,
        user: {
          ...stateUser,
          ...actionUser,
        },
      };
    default:
      return state;
  }
};

export default currentUserReducer;
