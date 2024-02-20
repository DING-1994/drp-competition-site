import Content from "../components/body/Content";
import FileUploadForm from "../components/form/FileUploadForm";
import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { useAuthContext } from "../lib/context/AuthContext";
import { PageProps } from "./props/PageProps";

export default function Submissions({ index, value }: PageProps) {
  const { currentUser } = useAuthContext();
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
          <FileUploadForm />
        </>
      ) : (
        <Paragraph>You are not signed in.</Paragraph>
      )}
    </Content>
  );
}
