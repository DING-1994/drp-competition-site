import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Content from "../components/body/Content";
import Ul from "../components/paragraphComponents/UnorderedList";
import { BlockMath, InlineMath } from "react-katex";

export default function RulesAndGuidelines({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="challenge-description">
        Challenge Description
      </HeadingWithLink>
      <Paragraph>
        Welcome to the AAMAS 2024 Drone Delivery Routing Problems Competition.
        These are the Rules and Guidelines of this competition. This challenge is organized
        by Shiyao Ding, Hideki Aoyama, Donghui Lin, and Fumito Uwano. <a href="https://github.com/DrpChallenge/main">GitHub</a> and
        this website provide information about this competition. Please read
        these rules carefully. If you don't agree with ( or cannot comply with )
        the rules, you may not participate in this Challenge.
      </Paragraph>
      <Paragraph>
        This competition aims to advance various disciplines such as logistics,
        computer science, and operations research. This challenge addresses 
        a real-world issue encountered by transportation and logistics companies globally.
        At the heart of DRP lies the goal of optimizing routes for a fleet
        of drones to ensure efficient, timely, and cost-effective delivery of goods.
      </Paragraph>

      <HeadingWithLink id="environment">
        Environment
      </HeadingWithLink>
      <Paragraph>
        In this competition, we have designed an environment that simulates
        real-world drone delivery conditions, and participants navigate this
        environment to complete the task. The environment is a non-grid space
        consisting of nodes and edges, with distances assigned to the edges, 
        which are created from real-world maps.
        Multiple agents move across the map based on specific policies and are
        constrained to exist only on nodes and edges. Each agent has unique
        nodes as their destination and departure points. The agent can ascertain
        the positions of other agents only when they appear on an adjacent node.
        Furthermore, once an agent enters an edge, it maintains its direction
        until it reaches a node. 
      </Paragraph>
      <Paragraph>
        Agents are allowed to move until they either collide with each other or
        until all agents reach their respective goals. In this dynamic
        environment, participants approach problem-solving through an
        interdisciplinary methodology.
      </Paragraph>

      <HeadingWithLink id="q-and-a">Q&A</HeadingWithLink>
      <Paragraph>
        To support participants and ensure the success of this competition, we
        plan to accept questions from participants. A<a href="https://github.com/DrpChallenge/main"> GitHub
        repository</a> will be set up to handle participant questions. The content
        of the Q&A session will be made publicly available on the webpage to
        ensure all participants have access to the information unless the
        question is related to personal information. Additionally, there are
        plans to include instructions on how to use the environment and provide
        a basic guide on using Stable Baselines.
      </Paragraph>

      <HeadingWithLink id="registration-and-participation">
        Registration and Participation
      </HeadingWithLink>
      <Paragraph>
        To participate in this competition, the team must complete the following
        form from the "Participate" button on the top.
      </Paragraph>
      <Paragraph>
        You can participate in this Challenge alone or as a team. These are no
        maximum team member and the minimum team size is one person.
        Participants may not collaborate unless those participants entered this
        Challenge as a team; participants who are members of the same team may
        collaborate with one another. Teams may not be merged.
      </Paragraph>

      <HeadingWithLink id="date">Date</HeadingWithLink>
      <Paragraph>The following schedule are being devised.</Paragraph>
      <Ul>
        <li>Open homepage and start registration:2024.03.15 10:30 UTC+9</li>
        <li>Submission period:2024.03.16 - 2024.04.15</li>
        <li>Submission deadline:2024.04.15 10:30 UTC+9</li>
        <li>Finalist Announcement:2024.04.20 10:30 UTC+9</li>
        <li>Winner Announcement:2024.04.25 10:30 UTC+9</li>
      </Ul>
      <Paragraph>
        All times are written in Japan Standard Time ( JST ). YOU ARE RESPONSIBLE
        TO IDENTIFY THE RELEVANT TIME ZONE IN YOUR LOCATION. The competition
        will take place from the specified start date and time until the
        designated end date and time as outlined on the website, with the
        possibility of modifications. Any revised or supplementary deadlines
        will be communicated through the website. It is your duty to routinely
        monitor the website for updates on any changes to the deadlines.
      </Paragraph>

      <HeadingWithLink id="competition-evaluation-criteria">
        Competition Evaluation Criteria
      </HeadingWithLink>
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
        ,where <InlineMath>goal\_rate</InlineMath> is the goal rate, calculated
        as the ratio of the number of agents that have reached their goals to
        the total number of agents.
        <InlineMath>{"Dist_{low}"}</InlineMath> represents the summation of the
        shortest path distances for all agents, which serves as a lower bound of
        the optimal solution. <InlineMath>{"Dist_{real}"}</InlineMath> is the
        total distance that all agents have covered. The goal rate is the percentage
        of trial times in which all agents can reach their destination nodes
        without collision.
        If they reach the same score, <InlineMath>optim\_rate</InlineMath>would be the indicator to rank. 
        The scores submitted during the final submission period will be considered for the final evaluation.
        During the submission period, participants can submit their
        programs with many times, the highest score from the submission will be
        used for the final evaluation.
      </Paragraph>

      <HeadingWithLink id="submission">Submission</HeadingWithLink>
      <Paragraph>
        Conditioned upon compliance with these rules, the Organizers will award
        Prizes to the participants with the highest scores, which are evaluated
        by the competition evaluation criteria ( defined below ). Participants
        need to submit these four things through Google form during the
        submission period.
      </Paragraph>
      <Ul>
        <li>
          Source Code: Please provide all the code used to generate these
          results. Additionally, include moderately concise comments to ensure
          that others can understand the code when reading it. It is strictly
          prohibited to reuse code from other teams.
        </li>
        <li>
          Academic report ( optional ) : Brief instruction of the method, one page ( excluding reference ) ,
          should be written in English.
          Whether to submit the academic report is optional.
          If there is any related information used to derive the
          results, this information must be contained in their academic report.
        </li>
      </Ul>

      <HeadingWithLink id="finalist">Finalist</HeadingWithLink>
      <Paragraph>
        Each submission undergoes scoring and ranking based on the evaluation
        metrics specified on the website. The top three teams are then selected
        as finalists. During the finalist determination process, we thoroughly
        examine each submission to ensure it meets the following criteria:
      </Paragraph>
      <Ul>
        <li>
          Code fairness: Confirming there is no plagiarism from other teams in
          the code.
        </li>
        <li>
          model reproducibility: Verifying that the score is independent of the
          state of the environment.
        </li>
      </Ul>
      <Paragraph>
        Sharing information among teams is strictly
        restricted. It is forbidden to use the code of other teams and vice
        versa. To prevent code plagiarism, participants are prohibited from
        engaging in direct code exchanges with each other. 
      </Paragraph>
      <Paragraph>
        If a team fails to meet these criteria, the participant cannot be
        selected as a finalist, regardless of their score. The announcement of
        finalists for this competition is made on the website. Certificates will
        be provided to all participants whose programs run successfully.
        Furthermore, we will select three teams as finalists based on their
        score.
      </Paragraph>
      <HeadingWithLink id="prizes">Prizes</HeadingWithLink>
      <Paragraph>
      We will issue certificates to all participants whose programs run
      successfully. These include certificates for the 1st, 2nd, and 3rd
      prize winners. In addition, all other participants who meet the
      criteria will receive participation certificates, acknowledging their
      successful program execution.
      </Paragraph>
      <HeadingWithLink id="others">Others</HeadingWithLink>
      <Paragraph>
        While participants are allowed to add the functions within the
        environment, they are not permitted to alter the fundamental behavior of
        the agents and the environment. 
        For example, changing the definition of collisions or
        expanding the range of agent movement beyond nodes and edges would not
        be allowed.
      </Paragraph>
    </Content>
  );
}
