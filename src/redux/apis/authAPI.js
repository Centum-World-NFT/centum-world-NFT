import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const signUpAPI = (payload) => {
  return axios.post(`${BASE_URL}/creator/signup-creator-and-user`, payload);
};

export const signInAPI = (payload) => {
  return axios.post(`${BASE_URL}/creator/login-creator-and-user`, payload);
};
