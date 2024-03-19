import { TAB_VALUES, TAB_VALUES_TYPE } from "../../App";
import {
  Divider,
  Drawer,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

interface HeaderTabsProps {
  tabValue: TAB_VALUES_TYPE;
  setTabValue: React.Dispatch<React.SetStateAction<TAB_VALUES_TYPE>>;
}

export default function HeaderTabs({ tabValue, setTabValue }: HeaderTabsProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const tabValue = (() => {
  //   const path = location.pathname.replace("#", "");
  //   switch (path) {
  //     case "/overview":
  //       return TAB_VALUES.Overview;
  //     case "/guidelines":
  //       return TAB_VALUES.Rules;
  //     case "/leaderboard":
  //       return TAB_VALUES.Leaderboard;
  //     case "/submissions":
  //       return TAB_VALUES.Submissions;
  //     case "/organization":
  //       return TAB_VALUES.Organization;
  //     default:
  //       return TAB_VALUES.Overview;
  //   }
  // })();

  React.useEffect(() => {
    const hash = location.hash.replace("#", "");
    setTabValue(tabValue);
    // DOM の構築が終わるのを待ってからスクロールする
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      navigate(`#${hash}`);
    }, 0);
    console.log("tabValue: ", tabValue);
  }, []);

  const handleTabChange = (
    _: React.SyntheticEvent,
    newValue: TAB_VALUES_TYPE
  ) => {
    setTabValue(() => newValue);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <Tabs
        onChange={handleTabChange}
        orientation="vertical"
        value={tabValue}
        sx={{
          alignSelf: "stretch",
          paddingTop: "5vh",
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <Tab
          label="Overview"
          component={Link}
          to="overview/"
          disableRipple
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
        <Tab
          label="Guidelines"
          component={Link}
          to="guidelines/"
          disableRipple
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
        <Tab
          label="Organization"
          component={Link}
          to="organization/"
          disableRipple
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
        <Tab
          label="Submissions"
          component={Link}
          to="submissions/"
          disableRipple
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
        <Tab
          label="Leaderboard"
          component={Link}
          to="leaderboard/"
          disableRipple
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
      </Tabs>
    </Box>
  );

  const container = document.body;

  return (
    <>
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { md: "none" }, padding: 0 }}
      >
        <MenuIcon />
      </IconButton>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{
          alignSelf: "stretch",
          paddingTop: "5vh",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Tab
          label="Overview"
          component={Link}
          to="/overview"
          disableRipple
          sx={{
            textTransform: "none",
            fontWeight: "bold",
          }}
        />
        <Tab
          label="Guidelines"
          component={Link}
          to="/guidelines"
          disableRipple
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
        <Tab
          label="Organization"
          component={Link}
          to="/organization"
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
        <Tab
          label="Leaderboard"
          component={Link}
          to="/leaderboard"
          disableRipple
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
      </Tabs>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          // ModalProps={{
          //   keepMounted: true,
          // }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "300px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
