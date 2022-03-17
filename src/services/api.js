import axios from "axios";

const api = axios.create({
  baseURL: "https://api-express-dividecomigo.herokuapp.com/",
});

export default api;
