import Content from "../components/body/Content";
import { useAuthContext } from "../lib/context/AuthContext";
import { PageProps } from "./props/PageProps";

export default function Submissions({ index, value }: PageProps) {
  const { currentUser } = useAuthContext();
  return (
    <Content index={index} value={value}>
      <h1>Submissions</h1>
      <p>This is the submissions page.</p>
      {currentUser ? (
        <p>
          You are signed in as{" "}
          <strong>
            {currentUser.displayName} ({currentUser.email})
          </strong>
          .
        </p>
      ) : (
        <p>You are not signed in.</p>
      )}
    </Content>
  );
}
