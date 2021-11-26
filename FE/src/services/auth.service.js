import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/auth/";

export const loginApi = async (data) => {
  const res = await axios.post(BASE_URL + "login", data);
  return res;
};

export const registerApi = async (data) => {
  const res = await axios.post(BASE_URL + "register", data);
  return res;
};

export const authApi = async () => {
  const res = await axios.get(BASE_URL);
  return res
}

