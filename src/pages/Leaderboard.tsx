import Content from "../components/body/Content";
import ScoreTable from "../components/scoreTable/ScoreTable";
import { PageProps } from "./props/PageProps";

export default function Leaderboard({ index, value }: PageProps) {
  // const { currentUser } = useAuthContext();
  return (
    <Content index={index} value={value}>
      <ScoreTable />
    </Content>
  );
}
