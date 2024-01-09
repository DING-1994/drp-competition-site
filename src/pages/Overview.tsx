import { Grid } from "@mui/material";
import { Heading } from "../components/paragraphComponents/Heading";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Ul from "../components/paragraphComponents/UnorderedList";
import Content from "../components/body/Content";
import overviewImgUrl from "../assets/images/overview.png";
import environmentExampleUrl from "../assets/images/environment_example.png";

export default function Overview({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
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
        Installation page if you want to get further information.
      </Paragraph>

      <Heading>Important Date</Heading>
      <Ul>
        <li>Open homepage and start registration:2024.03.15 10:30 UTC+9</li>
        <li>Submission period:2024.03.16 - 2024.04.15</li>
        <li>Submission deadline:2024.04.15 10:30 UTC+9</li>
        <li>Finalist Announcement:2024.04.20 10:30 UTC+9</li>
        <li>Winner Announcement:2024.04.25 10:30 UTC+9</li>
      </Ul>

      <Heading>Task</Heading>
      <Paragraph>
        In this competition, three maps with varying scales and shapes are
        provided, each consisting of ten patterns with different starting and
        goal points. This results in a total of 30 data sets, used to calculate
        average values for goal rate and moving time. Goal rate is the
        percentage of trail times in which all agents can reach their
        destination nodes without collision.(The definition of "goal" and
        "collusion" are described in this page. )
      </Paragraph>

      <Heading>Submission</Heading>
      <Paragraph>
        {`Please go this page and submit your work. There are two submission phases, with the pre-submission phase for testing purposes and the final submission phase for evaluation.(Please see this page to know about more detailed criteria and finalist.) \nParticipants need to submit these four things through Google form during the submission period. `}
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
    </Content>
  );
}
