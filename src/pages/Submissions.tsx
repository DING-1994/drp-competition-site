import Content from "../components/body/Content";
import { PageProps } from "./props/PageProps";

export default function Submissions({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <h1>Submissions</h1>
      <p>This is the submissions page.</p>
    </Content>
  );
}
