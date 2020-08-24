import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  token: "",
  user: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_TOKEN:
        draft.token = action.payload;
        break;

      case types.GET_USER_SUCCESS:
        draft.user = action.payload.userData;
        break;
    }
    // case for token expiry
    if (action.type.slice(action.type.length - 7) === "FAILURE") {
      // failure of an api call
      // check for token expiry case in action.payload
      if (
        action.payload &&
        (action.payload["friendly-message"] === "Token Invalid" ||
          action.payload["friendly-message"] === "Token Expired")
      ) {
        draft.token = "";
        draft.user = {};
      }
    }
  });

export default reducer;
