import Overview from "./Overview";
import RulesAndGuidelines from "./RulesAndGuidelines";
import Organization from "./Organization";
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
      <Organization index={TAB_VALUES.Organization} value={value} />
      <Submissions index={TAB_VALUES.Submissions} value={value} />
    </>
  );
}
