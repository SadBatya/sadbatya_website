import axios from "axios";

export const getTests = () => {
  return axios.get("/api/get-tests").then((res) => res.data);
};
