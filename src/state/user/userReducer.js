import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
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
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...stateUser,
          ...actionUser,
        },
      };
    case FETCH_USER_FAILURE:
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
