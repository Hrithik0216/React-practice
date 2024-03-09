export const TOKEN = ""
// Utils/Token.js
// Utils/Token.js
export let isAuth = false;

export const setAuth = (value) => {
  isAuth = value;
};

export const getAuth = () => {
  return isAuth;
};

