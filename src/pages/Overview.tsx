import { Grid } from "@mui/material";
import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
// import Ul from "../components/paragraphComponents/UnorderedList";
import Content from "../components/body/Content";
// import overviewImgUrl from "../assets/images/overview.png";
// import environmentExampleUrl from "../assets/images/environment_example.png";
import aerialDeliveryRobot from "../assets/images/aerial_delivery_robot.png";
import AAMASmeeting from "../assets/images/AAMAS_meeting1.png";

// import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
// import { Link } from "react-router-dom";

export default function Overview({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="advisory">
        Welcome to the 1st DRP Challenge@
        <a href="https://www.aamas2024-conference.auckland.ac.nz/accepted/accepted-competitions">
          AAMAS-2024
        </a>
        !
      </HeadingWithLink>
      <Paragraph>
        Drone Routing Problems (DRP) Challenge is based on multiple drone
        delivery scenarios, where the objective is to identify a set of
        collision-free, optimal paths for multiple drones on real-world maps.
        Using a virtual platform that mimics real-world delivery scenarios,
        participants are expected to develop algorithms that facilitate safe,
        efficient, and cost-effective drone delivery of goods.
      </Paragraph>
      <HeadingWithLink id="advisory">News</HeadingWithLink>
      <Paragraph>
        <p>
          2024.05.09 DRP Challenge at AAMAS2024 was successfully held. Thank you
          to all participants!!
        </p>
        <img src={AAMASmeeting} style={{ width: "15vw" }} alt="Overview" />
        <p>Here are the finalists.</p>
        <li>1st : Masahiro Kaji</li>
        <li>2nd : Katsuki Ohto </li>
        <li>3rd : Keijiro Asama </li>
        <p>
          2024.04.25 We extended the Submission Deadline to April 28th. We are
          waiting for your submission!!
        </p>
        <p>
          2024.03.22 Some date has been changed and{" "}
          <a href="https://github.com/DrpChallenge/main/blob/main/assets/markdown/FAQ.md">
            Frequently Asked Questions
          </a>{" "}
          page open.
        </p>
        <p>
          2024.03.14 A reinforcement learning based{" "}
          <a href="https://github.com/DrpChallenge/main/tree/main/example">
            example code
          </a>{" "}
          has been provided.
        </p>
        <p>
          2024.03.10 A brief illustration{" "}
          <a href="https://www.youtube.com/watch?v=GvozDxtEDTs">video</a> has
          been uploaded.
        </p>
        <Grid container alignItems="center" justifyContent="center" padding={5}>
          <img
            src={aerialDeliveryRobot}
            style={{ width: "25vw" }}
            alt="Overview"
          />
        </Grid>
      </Paragraph>
    </Content>
  );
}
