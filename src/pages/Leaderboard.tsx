import Content from "../components/body/Content";
import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import ScoreTable from "../components/scoreTable/ScoreTable";
import { PageProps } from "./props/PageProps";

export default function Leaderboard({ index, value }: PageProps) {
  // const { currentUser } = useAuthContext();
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="leaderboard">Leaderboard</HeadingWithLink>
      <ScoreTable />
    </Content>
  );
}
