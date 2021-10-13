import { signinAdmin } from "../../helper/auth";

const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    return signinAdmin(username, password).then((user) => {
      if (user.uid) {
        localStorage.setItem("accessToken", user.accessToken);
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("accessToken");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("accessToken");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("accessToken")
      ? Promise.resolve()
      : Promise.reject();
    // checkSignin() ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
