import * as React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/appbar/Header";
import SuccessSnackbar from "./components/snackbar/SuccessSnackbar";
import AlertDialog from "./components/alert/AlertDialog";
import Lp from "./pages/Lp";
import Overview from "./pages/Overview";
import RulesAndGuidelines from "./pages/RulesAndGuidelines";
import Leaderboard from "./pages/Leaderboard";
import { appTheme } from "./util/Theme";
import { useUserInfo } from "./hooks/useUserInfo";
import { useFormInfo } from "./hooks/useFormInfo";

export const TAB_VALUES = {
  Overview: 0,
  Rules: 1,
  Leaderboard: 2,
  Submissions: 3,
} as const;

export type TAB_VALUES_TYPE = (typeof TAB_VALUES)[keyof typeof TAB_VALUES];

export default function App() {
  const [tabValue, setTabValue] = React.useState<TAB_VALUES_TYPE>(
    TAB_VALUES.Overview
  );

  React.useEffect(() => {
    let newValue;
    switch (location.pathname) {
      case "/overview":
        newValue = TAB_VALUES.Overview;
        break;
      case "/rules-and-guidelines":
        newValue = TAB_VALUES.Rules;
        break;
      case "/leaderboard":
        newValue = TAB_VALUES.Leaderboard;
        break;
      case "/submissions":
        newValue = TAB_VALUES.Submissions;
        break;
      default:
        newValue = TAB_VALUES.Overview;
    }
    setTabValue(newValue);
  }, [location]);

  // ユーザー情報を管理するためのカスタムフック
  const userInfoState = useUserInfo();
  // フォーム情報を管理するためのカスタムフック
  const signUpFormInfoState = useFormInfo();
  const signInFormInfoState = useFormInfo();

  const [darkMode, _] = React.useState(
    localStorage.getItem("darkMode") === "on" ? true : false
  );

  // const toggleDarkMode = () => {
  //   localStorage.setItem("darkMode", darkMode ? "off" : "on");
  //   setDarkMode(!darkMode);
  // };

  const theme = createTheme(appTheme(darkMode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header
          setTabValue={setTabValue}
          signInFormInfoState={signInFormInfoState}
          signUpFormInfoState={signUpFormInfoState}
          userInfoState={userInfoState}
        />
        <SuccessSnackbar
          open={signInFormInfoState.formSentSuccess}
          setFormSentSuccess={signInFormInfoState.setFormSentSuccess}
          message="Signed in successfully!"
        />
        <AlertDialog
          open={signUpFormInfoState.formSentSuccess}
          setOpen={signUpFormInfoState.setFormSentSuccess}
          title="Verify your email"
          message="In order to complete the registration, please check your email and activate your account from the link in the email."
        />
        <AlertDialog
          open={signInFormInfoState.formSentError}
          setOpen={signInFormInfoState.setFormSentError}
          title="Failed to sign in"
          message={signInFormInfoState.formSentErrorMessage}
        />
        <AlertDialog
          open={signUpFormInfoState.formSentError}
          setOpen={signUpFormInfoState.setFormSentError}
          title="Failed to sign up"
          message={signUpFormInfoState.formSentErrorMessage}
        />
        <Routes>
          <Route path="/" element={<Lp value={tabValue} />} />
          <Route
            path="/overview"
            element={<Overview index={TAB_VALUES.Overview} value={tabValue} />}
          />
          <Route
            path="/rules-and-guidelines"
            element={
              <RulesAndGuidelines index={TAB_VALUES.Rules} value={tabValue} />
            }
          />
          <Route
            path="/leaderboard"
            element={
              <Leaderboard index={TAB_VALUES.Leaderboard} value={tabValue} />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
