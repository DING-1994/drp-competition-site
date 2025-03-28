import * as React from "react";
import {
  DialogActions,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  LinearProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { UserInfo } from "../../hooks/useUserInfo";
import { FormInfo } from "../../hooks/useFormInfo";

interface SignInFormProps {
  formInfoState: FormInfo;
  userInfoState: UserInfo;
}

export default function SignInForm({
  formInfoState,
  userInfoState,
}: SignInFormProps) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    formInfoState.setFormSentLoading(true);
    try {
      // サインイン処理
      const auth = getAuth();
      await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      const user = auth.currentUser;
      if (user?.emailVerified === false) {
        formInfoState.setFormSentError(true);
        formInfoState.setFormSentErrorMessage(
          "Your email is not verified. Please check your inbox and verify your email."
        );
        return;
      }
      console.log("sign in!");
      userInfoState.setIsSignedIn(true);
      formInfoState.setFormSentSuccess(true);
    } catch (error) {
      if (error instanceof FirebaseError) {
        formInfoState.setFormSentError(true);
        formInfoState.setFormSentErrorMessage(error.message);
      } else {
        console.log("error not related to Firebase", error);
      }
    } finally {
      formInfoState.setFormSentLoading(false);
      formInfoState.setFormOpen(false);
      setFormValue({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      {formInfoState.formSentLoading && <LinearProgress />}
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          value={formValue.email}
          onChange={(e) =>
            setFormValue((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
        <TextField
          margin="dense"
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          value={formValue.password}
          onChange={(e) =>
            setFormValue((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <DialogActions>
          <Button
            onClick={() => formInfoState.setFormOpen(false)}
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Cancel
          </Button>
          <Button type="submit" color="primary" sx={{ textTransform: "none" }}>
            Sign In
          </Button>
        </DialogActions>
      </form>
    </>
  );
}
