const BASE_URL = 'http://localhost:1337';

const REGISTER = (registerData) => ({
  URL: `${BASE_URL}/auth/local/register`,
  METHOD: 'post',
  HEADERS: {
    'Content-Type': 'application/json',
  },
  BODY: JSON.stringify(registerData),
});

const CONNEXION = {
  URL: `${BASE_URL}/auth/local`,
  METHOD: 'post',
};

const OWN_PROFILE = (token) => ({
  URL: `${BASE_URL}/users/me`,
  METHOD: 'get',
  HEADERS: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export { REGISTER, CONNEXION, OWN_PROFILE };
