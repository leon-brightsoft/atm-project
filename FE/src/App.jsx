import "./App.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import MainScreen from "./screen/MainScreen";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Routing from "./router/Routing";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => <Routing {...props} authRouter="login" />}
            />
            <Route
              exact
              path="/register"
              render={(props) => <Routing {...props} authRouter="register" />}
            />
            <Route exact path="/" component={MainScreen} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
