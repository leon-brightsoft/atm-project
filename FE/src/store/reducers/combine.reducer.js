import auth from "./auth.reduce";
import Atm from "./atm.reducer";
import People from "./people.reducer"
import { combineReducers } from "redux";
import { LOGOUT } from "../actions/types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["authLoading", "user", "isAuthenticated"],
    debug: false,
};

const appReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth), Atm, People
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;
