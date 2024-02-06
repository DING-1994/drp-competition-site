import firebase from "firebase/compat/app";
import { Dispatch } from "react";
import { Action } from "./interface";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export function listenAuthState(dispatch: Dispatch<Action>) {
  return onAuthStateChanged(auth, (user) => {
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
