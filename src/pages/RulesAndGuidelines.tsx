import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Content from "../components/body/Content";
import Ul from "../components/paragraphComponents/UnorderedList";
// import { BlockMath, InlineMath } from "react-katex";

export default function RulesAndGuidelines({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="important-date">Important Date</HeadingWithLink>
      <Ul>
        <li>Open Homepage and Start Registration:2024.02.07 </li>
        <li>Contribution Period:2024.02.07 - 2024.04.01</li>
        <li>Submission Deadline of Contributions:2024.04.01 23:59 AoE</li>
        <li>Finalist Announcement:2024.04.10 </li>
        <li>Agenda Publishment:2024.04.17 </li>
      </Ul>
      <HeadingWithLink id="registration-and-participation">
        Participation
      </HeadingWithLink>
      <Paragraph>
       To participate in this competition, please complete the registration by clicking the "Participate" button
        at the top of the page. Participants can enter the competition either individually or 
        as part of a team. When registering as a team, please ensure all members use the same team name. 
        There is no limit to the number of members per team.
      </Paragraph>
      <HeadingWithLink id="submission">Submission</HeadingWithLink>
      <Paragraph>
        After completing registration, participants can begin to develop their contributions by using the <a href="https://github.com/DrpChallenge/main">GitHub repository</a>. 
        You are required to submit a zip file containing the following components:
      </Paragraph>
      <Ul>
        <li>
         Source Code: Please include all the code used to generate your results.
        </li>
        <li>
          Academic Report: A brief description of your method, to be provided in English. 
        </li>
      <Paragraph>
      You may submit your contributions multiple times; however, only the final submission will be considered for evaluation.
      </Paragraph>
      </Ul>

      <HeadingWithLink id="prizes">Prizes</HeadingWithLink>
      <Paragraph>
        Each submission will be scored and ranked based on specific <a href="https://github.com/DrpChallenge/main?tab=readme-ov-file#evaluation">evaluation metrics</a>. 
        Certificates will be awarded to all participants whose programs run successfully. 
        Additionally, the top 3 teams will be recognized with 1st, 2nd, and 3rd prizes, respectively. 
        We conduct a thorough examination of each submission to ensure it adheres to the following criteria:
      </Paragraph>
      <Ul>
        <li>
          Code Fairness: there must be no plagiarism from other teams in your code.
        </li>
        <li>
          Model Reproducibility: The submission must be reproducible using the original DRP environment codes provided by us.
        </li>
      </Ul>
      <Paragraph>
       Failure to meet these criteria disqualifies a participant from being selected as a finalist, 
        regardless of their score. The announcement of finalists will be made on the competition's homepage, 
        where three teams will be selected as finalists based on their scores.
      </Paragraph>
      
      <HeadingWithLink id="others">Rules</HeadingWithLink>
      <Paragraph>
        Participants are permitted to add functions within the environment;
        however, they are not allowed to alter the fundamental behavior of the
        agents and the environment. For instance, modifying the definition of
        collisions or extending the range of agent movement beyond nodes and
        edges is prohibited.
      </Paragraph>
            <HeadingWithLink id="q-and-a">Q&A</HeadingWithLink>
      <Paragraph>
       Please be free to consult with <a href="drpchallenge@googlegroups.com">drpchallenge[at]googlegroups.com</a>, if you have any question.
      </Paragraph>
    </Content>
  );
}
