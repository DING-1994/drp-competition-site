import firebase from "firebase/compat/app";
import { Dispatch } from "react";
import { Action } from "./interface";

export function listenAuthState(dispatch: Dispatch<Action>) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: "login",
        payload: {
          user,
        },
      });
    } else {
      dispatch({
        type: "logout",
      });
    }
  });
}

export const logout = () => {
  return firebase
    .auth()
    .signOut()
    .catch((error) => {
      console.error(error);
    });
};
