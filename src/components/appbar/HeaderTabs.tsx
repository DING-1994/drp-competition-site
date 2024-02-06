import { TAB_VALUES, TAB_VALUES_TYPE } from "../../App";
import { Tab, Tabs } from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface HeaderTabsProps {
  setTabValue: React.Dispatch<React.SetStateAction<TAB_VALUES_TYPE>>;
}

export default function HeaderTabs({ setTabValue }: HeaderTabsProps) {
  const location = useLocation();
  const navigate = useNavigate();

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
      default:
        return TAB_VALUES.Overview;
    }
  })();

  React.useEffect(() => {
    const hash = location.hash.replace("#", "");
    setTabValue(currentTabValue);
    // DOM の構築が終わるのを待ってからスクロールする
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      navigate(`#${hash}`);
    }, 0);
  }, []);

  const handleTabChange = (
    _: React.SyntheticEvent,
    newValue: TAB_VALUES_TYPE
  ) => {
    setTabValue(newValue);
  };

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
      <Tab
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
      />
    </Tabs>
  );
}
