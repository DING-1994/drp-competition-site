import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Content from "../components/body/Content";
import Ul from "../components/paragraphComponents/UnorderedList";
import { BlockMath, InlineMath } from "react-katex";

export default function RulesAndGuidelines({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="registration-and-participation">
        Registration and Participation
      </HeadingWithLink>
      <Paragraph>
        To participate in this competition, teams must complete the registration
        form accessed via the "Participate" button at the top of the page.
      </Paragraph>
      <Paragraph>
        You can participate in this Challenge alone or as a team. There is no
        maximum team size, and the minimum team size is one person. Participants
        may not collaborate unless those participants entered this Challenge as
        a team; participants who are members of the same team may collaborate
        with one another. Teams may not be merged.
      </Paragraph>

      <HeadingWithLink id="q-and-a">Q&A</HeadingWithLink>
      <Paragraph>
        To support participants and ensure the success of this competition, we
        plan to accept questions from participants. A{" "}
        <a href="https://github.com/DrpChallenge/main">GitHub repository</a>{" "}
        will be set up to handle participant questions. The content of the Q&A
        session will be made publicly available on the homepage to ensure all
        participants have access to the information unless the question is
        related to personal information. Additionally, there are plans to
        include instructions on how to use the environment and provide a basic
        guide on using Stable Baselines.
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
          Source code: Please provide all the code used to generate these
          results. Additionally, include moderately concise comments to ensure
          that others can understand the code when reading it. It is strictly
          prohibited to reuse code from other teams.
        </li>
        <li>
          Academic report ( optional ) : Brief instruction of the method, one
          page ( excluding reference ) , should be written in English. Whether
          to submit the academic report is optional. If there is any related
          information used to derive the results, this information must be
          contained in their academic report.
        </li>
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
    </Content>
  );
}
