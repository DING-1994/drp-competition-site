import { TAB_VALUES_TYPE } from "../../App";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderTabsProps {
  tabValue: TAB_VALUES_TYPE;
  handleTabChange: (
    event: React.SyntheticEvent,
    newValue: TAB_VALUES_TYPE
  ) => void;
}

export default function HeaderTabs({
  tabValue,
  handleTabChange,
}: HeaderTabsProps) {
  return (
    <Tabs
      value={tabValue}
      onChange={handleTabChange}
      sx={{ alignSelf: "stretch", paddingTop: "5vh" }}
    >
      <Tab
        label="Overview"
        component={Link}
        to="/overview"
        disableRipple
        sx={{ textTransform: "none", fontWeight: "bold" }}
      />
      <Tab
        label="Rules and Guidelines"
        component={Link}
        to="/rules-and-guidelines"
        disableRipple
        sx={{ textTransform: "none", fontWeight: "bold" }}
      />
      {/* <Tab
        label="Leaderboard"
        component={Link}
        to="/leaderboard"
        disableRipple
        sx={{ textTransform: "none", fontWeight: "bold" }}
      />
      <Tab
        label="Submissions"
        component={Link}
        to="/submissions"
        disableRipple
        sx={{ textTransform: "none", fontWeight: "bold" }}
      /> */}
    </Tabs>
  );
}
