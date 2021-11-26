import toast from 'react-hot-toast';
import { SET_PEOPLE } from './types';
import { addPersonApi, getPersonApi } from '../../services/people.service';

export const addPeople = async (data) => {
    try {
        const res = await addPersonApi(data);
        if(res.data){
            toast.success("Create successfilly")
        }
    } catch (err) {
        toast.error(err.message);
    }
}

export const getPerson = () => {
    return async (dispatch) => {
        try {
            const res = await getPersonApi();
            if (res.data) {
                dispatch({
                    type: SET_PEOPLE,
                    payload: {
                        people: res.data?.queue   
                    }
                })
            }
        } catch (err) {
            toast.error(err.message)
        }
    }
}
