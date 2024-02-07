import { Action } from "./interface";

const initialState = {
  user: null,
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload?.user,
      };
    case "logout":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default {
  initialState,
  reducer,
};
