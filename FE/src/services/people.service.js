import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/atms/";

export const addPersonApi = async (data) => {
    const res = await axios.post(BASE_URL + "people", data);
    return res;
}

export const getPersonApi = async () => {
    const res = await axios.get(BASE_URL);
    return res;
}