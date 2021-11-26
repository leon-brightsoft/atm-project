import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/atms/";

export const getAtmApi = async () => {
    const res = await axios.get(BASE_URL);
    return res;
}


export const addAtmApi = async (data) => {
    const res = await axios.post(BASE_URL, data);
    return res;
}

export const delAtmApi = async (id) => {
    const res = await axios.delete(BASE_URL + id);
    return res;
} 