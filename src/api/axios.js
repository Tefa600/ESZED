import axios from "axios";

export default axios.create({
  baseURL: "https://spacezone-backend-backup.cyclic.app/",
  timeout: 10000,

  withCredentials: true,
});
