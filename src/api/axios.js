import axios from "axios";

export default axios.create({
  baseURL: "https://spacezone-backend.onrender.com",

  withCredentials: true,
});
