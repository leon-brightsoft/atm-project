import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../screen/Login";
import Register from "../screen/Register";

function Routing({ authRouter }) {
  const auth = useSelector((state) => state.auth);

  if (auth?.isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      {authRouter === "login" && <Login />}
      {authRouter === "register" && <Register />}
    </div>
  );
}

export default Routing;
