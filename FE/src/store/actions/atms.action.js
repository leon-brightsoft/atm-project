import toast from "react-hot-toast";
import { SET_ATM } from "./types";
import { getAtmApi, addAtmApi, delAtmApi } from "../../services/atm.service"

export const getAtm = () => {
    return async (dispatch) => {
        try {
            const res = await getAtmApi();
            if (res.data) {
                dispatch({
                    type: SET_ATM,
                    payload: {
                        atms: res.data?.atm,
                        processedClient: res.data?.processedClient
                    }
                })
            }
        } catch (err) {
            toast.error(err.message)
        }
    }
}

export const addAtm = (input) => {
    return async (dispatch) => {

        try {
            const res = await addAtmApi(input);
            if (res.data) {
                dispatch({
                    type: SET_ATM,
                    payload: {
                        atms: res.data,
                    }
                })
            }
            toast.success('Create ATM successfully')
        } catch (err) {
            toast.error(err.message)
        }
    }
}

export const delAtm = async (id) => {
    try {
        return await delAtmApi(id);
    } catch (err) {
        toast.error(err.message)
    }
}