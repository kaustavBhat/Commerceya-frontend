import axios from "axios";

// const BASE_URL = "https://commerceya-backend.herokuapp.com/api/";
const BASE_URL = "https://comerceya-pro-backend.onrender.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
