import * as React from "react";

export const useFormInfo = () => {
  const [formOpen, setFormOpen] = React.useState(false);
  const [formSentLoading, setFormSentLoading] = React.useState(false);
  const [formSentSuccess, setFormSentSuccess] = React.useState(false);
  const [formSentError, setFormSentError] = React.useState(false);
  const [formSentErrorMessage, setFormSentErrorMessage] = React.useState("");

  return {
    formOpen,
    setFormOpen,
    formSentLoading,
    setFormSentLoading,
    formSentSuccess,
    setFormSentSuccess,
    formSentError,
    setFormSentError,
    formSentErrorMessage,
    setFormSentErrorMessage,
  };
};

export type FormInfo = ReturnType<typeof useFormInfo>;
