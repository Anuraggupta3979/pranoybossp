import axios from "axios";
import BACKEND_URL from "backendUrl"

axios.defaults.baseURL = BACKEND_URL;
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const getProducts = () => {
  return axios
    .get(`product`)
    .then((response) => response.data)
    .catch(function (error) {
      handleError(error);
    });
};
