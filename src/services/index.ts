import axios from "axios";

const apiService = axios.create({
  baseURL: "https://www.alphavantage.co/",
  timeout: 5000,
});

apiService.defaults.params = {
  apikey: import.meta.env.VITE_API_KEY,
};

export default apiService;
