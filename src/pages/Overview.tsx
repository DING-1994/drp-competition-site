import { Grid } from "@mui/material";
import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Ul from "../components/paragraphComponents/UnorderedList";
import Content from "../components/body/Content";
// import overviewImgUrl from "../assets/images/overview.png";
// import environmentExampleUrl from "../assets/images/environment_example.png";
import aerialDeliveryRobot from "../assets/images/aerial_delivery_robot.png";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Link } from "react-router-dom";

export default function Overview({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <Paragraph>
        Welcome to the 1st Drone Routing Problems (DRP) Challenge @ AAMAS-2024.
        DRP Challenge is a multiple drone delivery scenario, where the objective is to 
        identify a set of collision-free optimal paths for multiple drones on real-world maps.
        Using a virtual platform that mimics real-world delivery scenarios, participants are
        expected to develop algorithms that facilitate safe, efficient, and cost-effective drone delivery of goods.
        <Grid container alignItems="center" justifyContent="center" padding={5}>
        <img
          src={aerialDeliveryRobot}
          style={{ width: "25vw" }}
          alt="Overview"
        />
      </Grid>
      </Paragraph>

      <HeadingWithLink id="important-date">Important Date</HeadingWithLink>
      <Ul>
        <li>Open homepage and start registration:2024.01.29 10:30 UTC+9</li>
        <li>Submission period:2024.01.29 - 2024.04.15</li>
        <li>Submission deadline:2024.04.15 10:30 UTC+9</li>
        <li>Finalist Announcement:2024.04.20 10:30 UTC+9</li>
        <li>Winner Announcement:2024.04.25 10:30 UTC+9</li>
      </Ul>
      <HeadingWithLink id="task">Task</HeadingWithLink>
      <Paragraph>
        In this competition, <strong>three maps</strong> with different
        scalability and shapes are provided, each consisting of{" "}
        <strong>ten patterns</strong> with different starting and goal points.
        This results in a total of <strong>30 data sets</strong>, used to
        calculate average values for <em>goal rate</em> and
        <em>moving time</em>. We calculate the score as the following equation.
      </Paragraph>
      <Paragraph>We calculate the score as the following equation.</Paragraph>
      <BlockMath math="score=goal\_rate + optim\_rate = \frac{N\_reach}{N} + \frac{Dist_{low}}{Dist_{real}}" />
      <Paragraph>
        where <InlineMath>goal\_rate</InlineMath> is the goal rate, calculated
        as the ratio of the number of agents that have reached their goals to
        the total number of agents. (The definition of "goal" and "collision"
        are described in{" "}
        <a href="https://github.com/DrpChallenge/main?tab=readme-ov-file#installation">
          {" "}
          the Installation page
        </a>
        ). <InlineMath>{"Dist_{low}"}</InlineMath> represents the summation of
        the shortest path distances for all agents, which serves as a lower
        bound of the optimal solution. <InlineMath>{"Dist_{real}"}</InlineMath>{" "}
        is the total distance that all agents have covered. Goal rate is the
        percentage of trail times in which all agents can reach their
        destination nodes without collision.
      </Paragraph>
      <HeadingWithLink id="submission">Submission</HeadingWithLink>
      <Paragraph>
        Please go to <Link to="/submission">Submission</Link> page and submit
        your work. There are two submission phases, with the pre-submission
        phase for testing purposes and the final submission phase for evaluation
        (Please see <Link to="/rules-and-guidelines">Rules and Guidelines</Link>{" "}
        to know about more detailed criteria and finalist).
      </Paragraph>
      <Paragraph>
        Participants need to submit these four things through Google form during
        the submission period.
      </Paragraph>
      <Ul>
        <li>
          Source code: If any part of the code is quoted, participants must
          indicate the source of the code.
        </li>
        <li>
          Academic report (optional): Brief instruction of the method, one page
          (excluding reference). Whether to submit the academic report is
          optional.
        </li>
      </Ul>
      <Paragraph>
        <strong>
          Attention: Submission times are not limited to the submission period.
          The latest submission is used to determine the finalist.
        </strong>{" "}
        More information about submission is described in{" "}
        <Link to="/submission">Submission</Link> page.
      </Paragraph>
      <HeadingWithLink id="other-rules-and-guidelines">
        Other rules and guidelines
      </HeadingWithLink>
      <Paragraph>
        Please see <Link to="/rules-and-guidelines">Rules and Guideline</Link>{" "}
        page.
      </Paragraph>
    </Content>
  );
}
