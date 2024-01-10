import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Toolbar,
} from "@mui/material";
import { TAB_VALUES_TYPE } from "../../App";

import HeaderTabs from "./HeaderTabs";
import SignUpForm from "../form/SignUpForm";
import SignInForm from "../form/SignInForm";
import { UserInfo } from "../../hooks/useUserInfo";
import { FormInfo } from "../../hooks/useFormInfo";

interface HeaderProps {
  setTabValue: React.Dispatch<React.SetStateAction<TAB_VALUES_TYPE>>;
  signUpFormInfoState: FormInfo;
  signInFormInfoState: FormInfo;
  userInfoState: UserInfo;
}

export default function Header({
  setTabValue,
  signUpFormInfoState,
  signInFormInfoState,
  userInfoState,
}: HeaderProps) {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", padding: 0 }}>
      <Toolbar
        sx={{
          padding: 0,
          marginLeft: {
            xs: "4vw",
            sm: "4vw",
            md: "8vw",
          },
          marginRight: {
            xs: "4vw",
            sm: "4vw",
            md: "8vw",
          },
        }}
      >
        <HeaderTabs setTabValue={setTabValue} />
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: "1rem", textTransform: "none", fontWeight: "bold" }}
          // onClick={() => signInFormInfoState.setFormOpen(true)}
          onClick={() => {
            console.log("Sign in button clicked");
          }}
        >
          Sign in
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: "1rem", textTransform: "none", fontWeight: "bold" }}
          // onClick={() => signUpFormInfoState.setFormOpen(true)}
          onClick={() => {
            console.log("Participate button clicked");
          }}
        >
          Participate
        </Button>
        <Dialog
          open={signUpFormInfoState.formOpen}
          onClose={() => signUpFormInfoState.setFormOpen(false)}
        >
          <DialogTitle>Register</DialogTitle>
          <DialogContent>
            <SignUpForm formInfoState={signUpFormInfoState} />
          </DialogContent>
        </Dialog>
        <Dialog
          open={signInFormInfoState.formOpen}
          onClose={() => signInFormInfoState.setFormOpen(false)}
        >
          <DialogTitle>Sign In</DialogTitle>
          <DialogContent>
            <SignInForm
              formInfoState={signInFormInfoState}
              userInfoState={userInfoState}
            />
          </DialogContent>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}
