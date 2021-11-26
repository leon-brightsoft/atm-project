import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/combine.reducer";
import { persistStore } from "redux-persist";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const persistor = persistStore(store);
export default store;
