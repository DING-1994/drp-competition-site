import { Grid } from "@mui/material";
import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
// import Ul from "../components/paragraphComponents/UnorderedList";
import Content from "../components/body/Content";
// import overviewImgUrl from "../assets/images/overview.png";
// import environmentExampleUrl from "../assets/images/environment_example.png";
import aerialDeliveryRobot from "../assets/images/aerial_delivery_robot.png";

// import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
// import { Link } from "react-router-dom";

export default function Overview({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="advisory">
        Welcome to the 2nd DRP Challenge@
        <a href="https://aamas2025.org/index.php/conference/program/competitions/">
          AAMAS-2025
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
          2025.03.28 The organizers present{" "}
          <a href="https://aamas2025.org/index.php/conference/program/demos/">
            our demo paper
          </a>{" "}
          as part of the 1st DRP Challenge at AAMAS 2025.
        </p>
        <p>2025.03.28 Site opened!!</p>
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
