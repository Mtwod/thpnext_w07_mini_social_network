import { OWN_PROFILE } from 'api/apiHandler';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { checkAuthentication, getAuthenticationCookie } from 'utils/cookieUtils';
import { fetchUserFromCookie } from './user/userActions';
import registerReducer from './user/userReducer';

const store = createStore(
  registerReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const fetchCurrentUserFromCookie = async () => {
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

  const {
    username,
    email,
    description,
  } = data;

  const user = {
    username,
    email,
    description,
  };

  store.dispatch(fetchUserFromCookie(user));
};

if (checkAuthentication()) fetchCurrentUserFromCookie();

export default store;
