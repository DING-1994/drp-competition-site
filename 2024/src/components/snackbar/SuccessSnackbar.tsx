import { Snackbar, Alert } from "@mui/material";

interface SuccessSnackbarProps {
  open: boolean;
  setFormSentSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

export default function SuccessSnackbar({
  open,
  setFormSentSuccess,
  message,
}: SuccessSnackbarProps) {
  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setFormSentSuccess(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
    >
      <Alert onClose={handleClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
}
