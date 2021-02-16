import Cookies from 'js-cookie';
import Config from 'config';

const checkAuthentication = () => {
  Cookies.get(Config.COOKIE_TOKEN_KEY);
};

const setAuthenticationCookie = (token) => {
  Cookies.set(Config.COOKIE_TOKEN_KEY, token);
};

export { checkAuthentication, setAuthenticationCookie };
