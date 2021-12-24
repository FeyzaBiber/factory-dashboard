import axios from "axios";

const axiosInstance = axios.create();
const { VUE_APP_API_URL: API_URL } = process.env;
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
axiosInstance.defaults.baseURL = API_URL;
axiosInstance.defaults.params = {};
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.config = config;

export default axiosInstance;
