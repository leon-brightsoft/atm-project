import { SET_AUTH } from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const auth = (state = initialState, action) => {
  const {
      type,
      payload
  } = action

  switch (type) {
      case SET_AUTH:
          return {
              ...state,
              user: payload?.user,
              isAuthenticated: payload?.isAuthenticated,
          }

      default:
          return state
  }
}

export default auth
