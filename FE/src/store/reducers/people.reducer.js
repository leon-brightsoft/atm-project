import { SET_PEOPLE } from "../actions/types";

const initialState = {
    people: [],
}

const People = (state = initialState, action) => {
    const {
        type,
        payload
    } = action

    switch(type) {
        case SET_PEOPLE:
            return{ 
                ...state,
                people: payload?.people || state.people
            }
            default: {
                return state
            }
    }


}

export default People