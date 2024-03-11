import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AlertDialog from "./components/alert/AlertDialog";
import Header from "./components/appbar/Header";
import SuccessSnackbar from "./components/snackbar/SuccessSnackbar";
import { useFormInfo } from "./hooks/useFormInfo";
import { useUserInfo } from "./hooks/useUserInfo";
import { AuthProvider } from "./lib/context/AuthContext";
import Leaderboard from "./pages/Leaderboard";
import Lp from "./pages/Lp";
import Organization from "./pages/Organization";
import Overview from "./pages/Overview";
import RulesAndGuidelines from "./pages/RulesAndGuidelines";
import Submissions from "./pages/Submissions";
import { appTheme } from "./util/Theme";

export const TAB_VALUES = {
  Overview: 0,
  Rules: 1,
  Organization: 2,
  Submissions: 3,
  Leaderboard: 4,
} as const;

export type TAB_VALUES_TYPE = (typeof TAB_VALUES)[keyof typeof TAB_VALUES];

export default function App() {
  const [tabValue, setTabValue] = React.useState<TAB_VALUES_TYPE>(
    TAB_VALUES.Overview
  );

  React.useEffect(() => {
    let newValue;
    const hash = location.hash;
    const path = hash.startsWith("#/") ? hash.split("#")[1] : hash;
    switch (path) {
      case "/overview":
        newValue = TAB_VALUES.Overview;
        break;
      case "/guidelines":
        newValue = TAB_VALUES.Rules;
        break;
      case "/leaderboard":
        newValue = TAB_VALUES.Leaderboard;
        break;
      case "/submissions":
        newValue = TAB_VALUES.Submissions;
        break;
      case "/organization":
        newValue = TAB_VALUES.Organization;
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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
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
              element={
                <Overview index={TAB_VALUES.Overview} value={tabValue} />
              }
            />
            <Route
              path="/guidelines"
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
            <Route
              path="/submissions"
              element={
                <Submissions index={TAB_VALUES.Submissions} value={tabValue} />
              }
            />
            <Route
              path="/organization"
              element={
                <Organization
                  index={TAB_VALUES.Organization}
                  value={tabValue}
                />
              }
            />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}
