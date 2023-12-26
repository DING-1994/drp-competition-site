import * as React from "react";
import {
  TextField,
  DialogActions,
  Button,
  IconButton,
  InputAdornment,
  LinearProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { FormInfo } from "../../hooks/useFormInfo";

interface SignUpFormProps {
  formInfoState: FormInfo;
}

export default function SignUpForm({ formInfoState }: SignUpFormProps) {
  const [formValue, setFormValue] = React.useState({
    username: "",
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
    console.log(formValue);
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      await updateProfile(userCredential.user, {
        displayName: formValue.username,
      });
      await sendEmailVerification(userCredential.user, {
        url: "http://localhost:5173/",
        handleCodeInApp: true,
      })
        .then(() => {
          console.log("email sent");
          formInfoState.setFormSentSuccess(true);
        })
        .catch((error) => {
          console.log("error when sending email");
          console.log(error.code);
          console.log(error.message);
          formInfoState.setFormSentError(true);
          formInfoState.setFormSentErrorMessage(error.message);
        });
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        console.log(error.message);
        formInfoState.setFormSentError(true);
        formInfoState.setFormSentErrorMessage(error.message);
      }
    } finally {
      // ローディングを終了
      formInfoState.setFormSentLoading(false);
      // フォームを閉じて値をリセット
      formInfoState.setFormOpen(false);
      setFormValue({
        username: "",
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
          id="username"
          label="User Name"
          type="text"
          fullWidth
          value={formValue.username}
          onChange={(e) =>
            setFormValue((prevState) => ({
              ...prevState,
              username: e.target.value,
            }))
          }
        />
        <TextField
          margin="dense"
          id="email"
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
          id="password"
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
            Submit
          </Button>
        </DialogActions>
      </form>
    </>
  );
}
