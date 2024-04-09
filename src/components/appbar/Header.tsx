import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Toolbar,
  Typography,
} from "@mui/material";
import { TAB_VALUES_TYPE } from "../../App";

import HeaderTabs from "./HeaderTabs";
import SignUpForm from "../form/SignUpForm";
import SignInForm from "../form/SignInForm";
import { UserInfo } from "../../hooks/useUserInfo";
import { FormInfo } from "../../hooks/useFormInfo";
import { logout } from "../../lib/firebase/auth";

import environmentExampleImageUrl from "../../assets/images/environment_example.png";

interface HeaderProps {
  tabValue: TAB_VALUES_TYPE;
  setTabValue: React.Dispatch<React.SetStateAction<TAB_VALUES_TYPE>>;
  signUpFormInfoState: FormInfo;
  signInFormInfoState: FormInfo;
  userInfoState: UserInfo;
}

export default function Header({
  tabValue,
  setTabValue,
  signUpFormInfoState,
  signInFormInfoState,
  userInfoState,
}: HeaderProps) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "250px",
          backgroundColor: "rgb(100,100,100)",
          backgroundImage:
            "linear-gradient(to top left, rgba(255,255,255,0.75), rgba(255,255,255,0))",
          position: "relative",
          zIndex: -2,
          overflow: "hidden",
        }}
      >
        <div style={{ width: "max-content", position: "relative" }}>
          <Typography
            variant="h3"
            sx={{
              color: "rgb(220,220,220)",
              textAlign: "left",
              paddingTop: "2rem",
              paddingLeft: { xs: "4vw", sm: "4vw", md: "8vw" },
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2.3rem" },
            }}
          >
            Drone Routing Problems Challenge
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgb(190,190,190)",
              textAlign: "right",
              paddingTop: "1rem",
              fontSize: "1.2rem",
            }}
          >
            @ AAMAS-2024
          </Typography>
        </div>
        <div style={{ width: "max-content" }}>
          <img
            src={environmentExampleImageUrl}
            alt="environment"
            style={{
              width: "150%",
              position: "relative",
              top: "-55%",
              left: "-50%",
              zIndex: -1,
              opacity: 0.2,
            }}
          />
        </div>
      </div>
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
          <HeaderTabs tabValue={tabValue} setTabValue={setTabValue} />
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "1rem", textTransform: "none", fontWeight: "bold" }}
            onClick={() => signInFormInfoState.setFormOpen(true)}
          >
            Sign in
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "1rem", textTransform: "none", fontWeight: "bold" }}
            onClick={() => logout()}
          >
            Sign out
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "1rem", textTransform: "none", fontWeight: "bold" }}
            onClick={() => signUpFormInfoState.setFormOpen(true)}
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
    </>
  );
}
