import { Grid } from "@mui/material";
import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Ul from "../components/paragraphComponents/UnorderedList";
import Content from "../components/body/Content";
import overviewImgUrl from "../assets/images/overview.png";
import environmentExampleUrl from "../assets/images/environment_example.png";
import aerialDeliveryRobot from "../assets/images/aerial_delivery_robot.png";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Link } from "react-router-dom";

export default function Overview({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="what-is-this-competition">
        What is this competition?
      </HeadingWithLink>
      <Paragraph>
        Welcome to the AAMAS-2024 Drone Routing Problems　(DRP) Challenge.
        DRP Challenge is a multiple drone delivery scenario, where the objective is to 
        locate a set of collision-free optimal paths for multiple drones on real-world maps.
        At the heart of DRP lies the goal of optimizing routes for a fleet of drones to ensure efficient, timely, and cost-effective delivery of goods.
        Using a virtual platform that mimics real-world delivery scenarios, participants are
        expected to develop algorithms that facilitate efficient, timely, and cost-effective delivery of goods.
        <Grid container alignItems="center" justifyContent="center" padding={5}>
        <img
          src={aerialDeliveryRobot}
          style={{ width: "25vw" }}
          alt="Overview"
        />
      </Grid>

      <Grid container alignItems="center" justifyContent="center" padding={5}>
        <img
          src={environmentExampleUrl}
          style={{ width: "30vw" }}
          alt="Overview"
        />
      </Grid>

      <HeadingWithLink id="important-date">Important Date</HeadingWithLink>
      <Ul>
        <li>Open homepage and start registration:2024.01.29 10:30 UTC+9</li>
        <li>Submission period:2024.01.29 - 2024.04.15</li>
        <li>Submission deadline:2024.04.15 10:30 UTC+9</li>
        <li>Finalist Announcement:2024.04.20 10:30 UTC+9</li>
        <li>Winner Announcement:2024.04.25 10:30 UTC+9</li>
      </Ul>
    </Content>
  );
}
