import { LOGOUT, SET_AUTH } from "./types";
import { loginApi, registerApi } from "../../services/auth.service";
import { accessTokenConfig } from "../../services/config.service";
import toast from "react-hot-toast";


export const login = (input) => {
  return async (dispatch) => {
    try {
      const res = await loginApi(input);
      if (res.data.user) {
        dispatch({
          type: SET_AUTH,
          payload: { isAuthenticated: true, user: res.data.user, token: res.data.PRIVATE_TOKEN },
        });
        accessTokenConfig(res.data.PRIVATE_TOKEN);
        toast.success("Login successfully");
      } else {
        throw new Error(res.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
};

export const register = (input) => {
  return async (dispatch) => {
    try {
      const res = await registerApi(input);
      if (res.data.user) {
        dispatch({
          type: SET_AUTH,
          payload: { isAuthenticated: true, user: res.data.user },
        });
        accessTokenConfig(res.data.PRIVATE_TOKEN);
      } else {
        throw new Error(res.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem("@localStorage/token");
    dispatch({
      type: LOGOUT,
      payload: { isAuthenticated: false, user: null },
    });
  };
};
