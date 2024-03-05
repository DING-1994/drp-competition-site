import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  DialogActions,
  // FormControlLabel,
  IconButton,
  InputAdornment,
  LinearProgress,
  // Radio,
  // RadioGroup,
  TextField,
} from "@mui/material";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import * as React from "react";
import { FormInfo } from "../../hooks/useFormInfo";
import { db } from "../../lib/firebase/firebase";

interface SignUpFormProps {
  formInfoState: FormInfo;
}

export default function SignUpForm({ formInfoState }: SignUpFormProps) {
  const [formValue, setFormValue] = React.useState({
    username: "",
    email: "",
    password: "",
    organization: "",
    teamName: "",
    teamPassword: "",
    participateAsTeamMember: false,
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    formInfoState.setFormSentLoading(true);
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

      // まとめて doc に追加
      const userDoc = {
        username: formValue.username,
        email: formValue.email,
        organization: formValue.organization,
        participateAsTeamMember: formValue.participateAsTeamMember,
        teamName: formValue.teamName,
      };

      await setDoc(doc(db, "users", userCredential.user.uid), userDoc);

      await sendEmailVerification(userCredential.user, {
        // url: "http://localhost:5173/",
        url:
          import.meta.env.VITE_IS_DEV === "true"
            ? "http://localhost:5173"
            : import.meta.env.VITE_HOSTING_URL,
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
        organization: "",
        teamName: "",
        teamPassword: "",
        participateAsTeamMember: false,
      });
    }
  };

  return (
    <>
      {formInfoState.formSentLoading && <LinearProgress />}
      {/* username */}
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
        {/* email */}
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
        {/* password */}
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
        <TextField
          margin="dense"
          id="organization"
          label="Organization"
          type="text"
          fullWidth
          value={formValue.organization}
          onChange={(e) =>
            setFormValue((prevState) => ({
              ...prevState,
              organization: e.target.value,
            }))
          }
        />

        {/* participation choice */}
        {/* <RadioGroup
          defaultValue="participate-as-individual"
          name="participation-choice"
          onChange={(e) => {
            const value = e.target.value === "participate-as-a-team-member";
            setFormValue((prevState) => ({
              ...prevState,
              participateAsTeamMember: value,
            }));
          }}
        >
          <FormControlLabel
            value="participate-as-individual"
            control={<Radio />}
            label="Participate as an individual"
          />
          <FormControlLabel
            value="participate-as-a-team-member"
            control={<Radio />}
            label="Participate as a team member"
          />
        </RadioGroup> */}
        {/* Team Info Fields */}
        {formValue.participateAsTeamMember && (
          <>
            <TextField
              margin="dense"
              id="teamName"
              label="Team Name"
              type="text"
              fullWidth
              value={formValue.teamName}
              onChange={(e) =>
                setFormValue((prevState) => ({
                  ...prevState,
                  teamName: e.target.value,
                }))
              }
            />
            <TextField
              margin="dense"
              id="teamPassword"
              label="Team Password"
              type="password"
              fullWidth
              value={formValue.teamPassword}
              onChange={(e) =>
                setFormValue((prevState) => ({
                  ...prevState,
                  teamPassword: e.target.value,
                }))
              }
            />
          </>
        )}
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
