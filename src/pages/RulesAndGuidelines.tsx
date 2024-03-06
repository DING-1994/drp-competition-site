import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Content from "../components/body/Content";
import Ul from "../components/paragraphComponents/UnorderedList";
// import { BlockMath, InlineMath } from "react-katex";

export default function RulesAndGuidelines({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
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
        After completing registration, participants can begin to develop their contributions. 
        You are required to submit a zip file containing the following components:
      </Paragraph>
      <Ul>
        <li>
         Source Code: Please include all the code used to generate your results.
        </li>
        <li>
          Academic Report: A brief description of your method, to be provided in English. 
        </li>
      You may submit your contributions multiple times; however, only the final submission will be considered for evaluation.
      </Ul>

      <HeadingWithLink id="finalist">Finalist</HeadingWithLink>
      <Paragraph>
        Each submission undergoes scoring and ranking based on the evaluation
        metrics specified on the homepage. The top three teams are then selected
        as finalists. During the finalist determination process, we thoroughly
        examine each submission to ensure it meets the following criteria:
      </Paragraph>
      <Ul>
        <li>
          Code fairness: Confirming there is no plagiarism from other teams in
          the code.
        </li>
        <li>
          Model reproducibility: Verifying that the score is independent of the
          state of the environment.
        </li>
      </Ul>
      <Paragraph>
        Sharing information among teams is strictly restricted. It is forbidden
        to use the code of other teams and vice versa.
      </Paragraph>
      <Paragraph>
        If a team fails to meet these criteria, the participant cannot be
        selected as a finalist, regardless of their score. The announcement of
        finalists for this competition is made on the homepage. We will select
        three teams as finalists based on their score.
      </Paragraph>
      <HeadingWithLink id="prizes">Prizes</HeadingWithLink>
      <Paragraph>
        We will issue certificates to all participants whose programs run
        successfully. These include certificates for the 1st, 2nd, and 3rd prize
        winners.
      </Paragraph>
      <HeadingWithLink id="others">Others</HeadingWithLink>
      <Paragraph>
        Participants are permitted to add functions within the environment;
        however, they are not allowed to alter the fundamental behavior of the
        agents and the environment. For instance, modifying the definition of
        collisions or extending the range of agent movement beyond nodes and
        edges is strictly prohibited.
      </Paragraph>
            <HeadingWithLink id="q-and-a">Q&A</HeadingWithLink>
      <Paragraph>
       Please　be free to consult with drpcommon2023@gmail.com, if you have any question
      </Paragraph>
    </Content>
  );
}
