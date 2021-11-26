import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";
import { useSelector } from "react-redux";

function MainScreen() {
  const auth = useSelector((state) => state.auth);

  const router = () => {
    if (!auth?.isAuthenticated) return <Redirect to="/login" />;
    return (
      <div>
        <Home />
      </div>
    );
  };

  return (
        <Route render={router} />
  );
}

export default MainScreen;
