import { SET_ATM } from "../actions/types";;


const initialState = {
    atms: [],
    processedClient: [],
}

const Atm = (state = initialState, action) => {
    const {
        type,
        payload
    } = action
    switch(type){
        case SET_ATM:
            return {
                ...state,
                atms: payload?.atms || state.atms,
                processedClient: payload?.processedClient || state.processedClient
            };
            default:
                return state;
    }
}

export default Atm