export interface Action {
  type: "login" | "logout";
  payload?: {
    user: any;
  };
}
