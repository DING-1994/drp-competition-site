import { TAB_VALUES, TAB_VALUES_TYPE } from "../../App";
import { Tab, Tabs } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderTabsProps {
  setTabValue: React.Dispatch<React.SetStateAction<TAB_VALUES_TYPE>>;
}

export default function HeaderTabs({ setTabValue }: HeaderTabsProps) {
  const location = useLocation();
  const currentTabValue = (() => {
    const path = location.pathname.replace("#", "");
    switch (path) {
      case "/overview":
        return TAB_VALUES.Overview;
      case "/rules-and-guidelines":
        return TAB_VALUES.Rules;
      case "/leaderboard":
        return TAB_VALUES.Leaderboard;
      case "/submissions":
        return TAB_VALUES.Submissions;
      case "/organization":
        return TAB_VALUES.Organization;
      default:
        return TAB_VALUES.Overview;
    }
  })();

  const handleTabChange = (
    _: React.SyntheticEvent,
    newValue: TAB_VALUES_TYPE
  ) => {
    setTabValue(newValue);
  };

  React.useEffect(() => {
    setTabValue(currentTabValue);
    console.log("currentTabValue: ", currentTabValue);
  }, [location]);

  return (
    <Tabs
      value={currentTabValue}
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
      <Tab
        label="Organization"
        component={Link}
        to="/organization"
        disableRipple
        sx={{ textTransform: "none", fontWeight: "bold" }}
      />

    </Tabs>
  );
}
