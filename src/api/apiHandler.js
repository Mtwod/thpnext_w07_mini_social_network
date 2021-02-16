const BASE_URL = 'http://localhost:1337';

const REGISTER = {
  URL: `${BASE_URL}/auth/local/register`,
  METHOD: 'post',
};

const CONNEXION = {
  URL: `${BASE_URL}/auth/local`,
  METHOD: 'post',
};

export { REGISTER, CONNEXION };
