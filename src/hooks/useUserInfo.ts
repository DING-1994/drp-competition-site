import * as React from "react";

export const useUserInfo = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  return { username, setUsername, email, setEmail, isSignedIn, setIsSignedIn };
};

export type UserInfo = ReturnType<typeof useUserInfo>;
