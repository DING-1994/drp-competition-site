import Overview from "./Overview";
import RulesAndGuidelines from "./RulesAndGuidelines";
import { TAB_VALUES, TAB_VALUES_TYPE } from "../App";
import Leaderboard from "./Leaderboard";

interface LpProps {
  value: TAB_VALUES_TYPE;
}

export default function Lp({ value }: LpProps) {
  return (
    <>
      <Overview index={TAB_VALUES.Overview} value={value} />
      <RulesAndGuidelines index={TAB_VALUES.Rules} value={value} />
      <Leaderboard index={TAB_VALUES.Leaderboard} value={value} />
    </>
  );
}
