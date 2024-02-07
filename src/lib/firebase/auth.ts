import { User } from "../common/User";
import { firebaseApp } from "./firebase";
import {
  onAuthStateChanged as onFirebaseAuthStateChanged,
  getAuth,
  signOut,
} from "firebase/auth";

export function logout(): Promise<void> {
  return new Promise((resolve, reject) => {
    const auth = getAuth(firebaseApp);
    signOut(auth)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  const auth = getAuth(firebaseApp);
  onFirebaseAuthStateChanged(auth, (user) => {
    const userInfo: User | null = user
      ? { displayName: user.displayName, email: user.email }
      : null;
    callback(userInfo);
  });
};
