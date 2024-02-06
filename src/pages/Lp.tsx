import Overview from "./Overview";
import RulesAndGuidelines from "./RulesAndGuidelines";
import Leaderboard from "./Leaderboard";
import Submissions from "./Submissions";
import { TAB_VALUES, TAB_VALUES_TYPE } from "../App";

interface LpProps {
  value: TAB_VALUES_TYPE;
}

export default function Lp({ value }: LpProps) {
  return (
    <>
      <Overview index={TAB_VALUES.Overview} value={value} />
      <RulesAndGuidelines index={TAB_VALUES.Rules} value={value} />
      <Leaderboard index={TAB_VALUES.Leaderboard} value={value} />
      <Submissions index={TAB_VALUES.Submissions} value={value} />
    </>
  );
}
