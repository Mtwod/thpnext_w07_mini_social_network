import Cookies from 'js-cookie';
import Config from 'config';

const checkAuthentication = () => {
  if (Cookies.get(Config.COOKIE_TOKEN_KEY)) return true;
  return false;
};

const noAuthentication = () => {
  if (Cookies.get(Config.COOKIE_TOKEN_KEY)) return false;
  return true;
};

const getAuthenticationCookie = () => (Cookies.get(Config.COOKIE_TOKEN_KEY));

const setAuthenticationCookie = (token) => {
  Cookies.set(Config.COOKIE_TOKEN_KEY, token);
};

const removeAuthenticationCookie = () => {
  Cookies.remove(Config.COOKIE_TOKEN_KEY);
};

export {
  checkAuthentication,
  noAuthentication,
  setAuthenticationCookie,
  getAuthenticationCookie,
  removeAuthenticationCookie,
};
