import Content from "../components/body/Content";
import FileUploadForm from "../components/form/FileUploadForm";
import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import SuccessSnackbar from "../components/snackbar/SuccessSnackbar";
import { useFormInfo } from "../hooks/useFormInfo";
import { useAuthContext } from "../lib/context/AuthContext";
import { PageProps } from "./props/PageProps";

export default function Submissions({ index, value }: PageProps) {
  const { currentUser } = useAuthContext();
  const formInfoState = useFormInfo();

  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="submissions">Submissions</HeadingWithLink>
      <Paragraph>Please upload one ZIP file of your program.</Paragraph>
      {currentUser ? (
        <>
          <Paragraph>
            You are signed in as{" "}
            <strong>
              {currentUser.displayName} ({currentUser.email})
            </strong>
          </Paragraph>
          <FileUploadForm formInfoState={formInfoState} />
        </>
      ) : (
        <Paragraph>You are not signed in.</Paragraph>
      )}
      <SuccessSnackbar
        open={formInfoState.formSentSuccess}
        setFormSentSuccess={formInfoState.setFormSentSuccess}
        message="Your file has been successfully uploaded."
      />
    </Content>
  );
}
