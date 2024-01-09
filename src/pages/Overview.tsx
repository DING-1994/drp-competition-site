import { Grid } from "@mui/material";
import { Heading } from "../components/paragraphComponents/Heading";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Ul from "../components/paragraphComponents/UnorderedList";
import Content from "../components/body/Content";
import overviewImgUrl from "../assets/images/overview.png";
import environmentExampleUrl from "../assets/images/environment_example.png";

import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';

export default function Overview({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <Heading>What is this competition?</Heading>
      <Paragraph>
        The Drone Routing Problems Challenge (DRP challenge) presents
        participants with a simulated environment to explore the application of
        reinforcement learning in optimizing drone delivery. Utilizing a virtual
        platform mimicking real-world delivery scenarios, participants are
        tasked with developing an agent capable of achieving swift and
        collision-free navigation to designated destinations.
      </Paragraph>
      <Heading>Overview</Heading>
      <Paragraph>
        This challenge tackles a key problem in the real world: How to transport
        goods as fast as possible on a dense transportation network without
        collisions.
      </Paragraph>
      <Paragraph>
        As time progresses, there is an increasing need to optimize
        transportation. To tackle this issue, let's initially address it within
        a virtual environment. We hope that such initiatives contribute not only
        to addressing specific transportation methods but also to the overall
        transportation problem.
      </Paragraph>
      <Paragraph>
        At the heart of DRP lies the goal of optimizing routes for a fleet of
        drones to ensure efficient, timely, and cost-effective delivery of
        goods.
      </Paragraph>
      <Grid container alignItems="center" justifyContent="center" padding={5}>
        <img src={overviewImgUrl} style={{ width: "50vw" }} alt="Overview" />
      </Grid>
      <Heading>Registration</Heading>
      <Paragraph>
        If you have even the slightest interest, let's participate in this
        competition! To join, click "participate" on the top right corner of the
        page.
      </Paragraph>
      <Heading>Environment</Heading>
      <Paragraph>
        The Aerial Delivery Robots environment is This simple-grid space
        environment consists of nodes and edges, and edges have some distances.
        The agents move on the map according to some kind of policy, and under
        any circumstances, they cannot exist outside of nodes and edges. Each
        agent has different nodes as their destination and departure state. In
        addition, This environment is described in Python.
      </Paragraph>
      <Grid container alignItems="center" justifyContent="center" padding={5}>
        <img
          src={environmentExampleUrl}
          style={{ width: "30vw" }}
          alt="Overview"
        />
      </Grid>
      <Heading>Requirement</Heading>
      <Paragraph>
        We can learn agents by using Stable-baseline 3 (SB3) and gymnasium. When
        we try to learn agents, we need to install both of them. SB 3 can
        customize policy networks, and save and load policy. Also, By using
        Wandb, we can take more detailed logs of agents' movements. Please see
        Installation page[Introduction/installation] if you want to get further
        information.
      </Paragraph>
      <Heading>Important Date</Heading>
      <Ul>
        <li>Open homepage and start registration:2024.01.29 10:30 UTC+9</li>
        <li>Submission period:2024.01.29 - 2024.04.15</li>
        <li>Submission deadline:2024.04.15 10:30 UTC+9</li>
        <li>Finalist Announcement:2024.04.20 10:30 UTC+9</li>
        <li>Winner Announcement:2024.04.25 10:30 UTC+9</li>
      </Ul>
      <Heading>Task</Heading>
      <Paragraph>
        In this competition, <strong>three maps</strong> with different
        scalability and shapes are provided, each consisting of{" "}
        <strong>ten patterns</strong>
        with different starting and goal points. This results in a total of{" "}
        <strong>30 data sets</strong>, used to calculate average values for{" "}
        <em>goal rate</em> and
        <em>moving time</em>. We calculate the score as the following equation.
      </Paragraph>
      <Paragraph>We calculate the score as the following equation.</Paragraph>
      <BlockMath math="score=goal\_rate + optim\_rate = \frac{N\_reach}{N} + \frac{Dist_{low}}{Dist_{real}}" />
      <Paragraph>
        where <InlineMath>goal\_rate</InlineMath> is the goal rate, calculated
        as the ratio of the number of agents that have reached their goals to
        the total number of agents. (The definition of "goal" and "collusion"
        are described in this page
        [Introduction/definition-of-each-action-and-processing-of-corresponding-rewards].
        )<InlineMath>{"Dist_{low}"}</InlineMath> represents the summation of the
        shortest path distances for all agents, which serves as a lower bound of
        the optimal solution. <InlineMath>{"Dist_{real}"}</InlineMath> is the
        total distance that all agents have covered. Goal rate is the percentage
        of trail times in which all agents can reach their destination nodes
        without collision.
      </Paragraph>
      <Heading>Submission</Heading>
      <Paragraph>
        Please go this page [submission] and submit your work. There are two
        submission phases, with the pre-submission phase for testing purposes
        and the final submission phase for evaluation.(Please see this page
        [rulesandguidelines] to know about more detailed criteria and finalist.)
      </Paragraph>
      <Paragraph>
        Participants need to submit these four things through Google form during
        the submission period.
      </Paragraph>
      <Ul>
        <li>
          Source Code: If any part of the code is quoted, participants must
          indicate the source of the code.
        </li>
        <li>
          Academic report(optional): brief instruction of the method, 1-3
          page(excluding reference). Whether to submit the academic report is
          optional.
        </li>
      </Ul>
        <strong>Attention: The times of submission are not limited to the submission
        period. The latest submission is used to determine the finalist.</strong> More information about submission are described in this page [submission].
      <Heading>Other rules and guidelines</Heading>
      <Paragraph>Please see this page [rulesandguidelines].</Paragraph>
    </Content>
  );
}
