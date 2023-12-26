import { Heading } from "../components/paragraphComponents/Heading";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Content from "../components/body/Content";
import Ul from "../components/paragraphComponents/UnorderedList";

export default function RulesAndGuidelines({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <Heading>Challenge Description</Heading>
      <Paragraph>
        Welcome to the AAMAS 2024 Drone Delivery Routing Problems Competition.
        These are the Rules and Guidelines of this competition.This is organized
        by Shiyao Ding,Hideki Aoyama,Donghui Lin and Fumito Uwano. Github and
        this website provies any information about this competition.Please read
        these rules carefully.If you don't agree with (or cannot comply with)
        the rules, then you may not participate in this Challenge.
      </Paragraph>
      <Paragraph>
        This competition aims to advance multi-agent reinforcement learning
        across various disciplines such as logistics, computer science, and
        operations research. This challenge addresses a real-world issue
        encountered by transportation and logistics companies globally.
        Participants are tasked with finding routes that minimize the number of
        steps for each agent to reach its destination without colliding with
        others.
      </Paragraph>
      <Paragraph>
        Agents are allowed to move until they either collide with each other or
        until all agents reach their respective goals. In this dynamic
        environment, participants approach problem-solving through an
        interdisciplinary methodology.
      </Paragraph>

      <Heading>Code fairness</Heading>
      <Paragraph>
        In terms of code fairness, sharing information among teams is strictly
        restricted. It is forbidden to use the code of other teams and vice
        versa. To prevent code plagiarism, participants are prohibited from
        engaging in direct code exchanges with each other. As time progresses,
        there is an increasing need to optimize transportation. To tackle this
        issue, let's initially address it within a virtual environment. We hope
        that such initiatives contribute not only to addressing specific
        transportation methods but also to the overall transportation problem.
      </Paragraph>

      <Heading>Q&A</Heading>
      <Paragraph>
        A web page and a GitHub repository are set up to handle participant
        questions. The content of the Q& A session is made publicly available on
        the web page to ensure all participants have access to the information
        unless the question is not related to participants personal information.
      </Paragraph>

      <Heading>Date</Heading>
      <Paragraph>The following schedule are being devised.</Paragraph>
      <Ul>
        <li>Open homepage and start registration:2024.03.15 10:30 UTC+9</li>
        <li>Submission period:2024.03.16 - 2024.04.15</li>
        <li>Submission deadline:2024.04.15 10:30 UTC+9</li>
        <li>Finalist Announcement:2024.04.20 10:30 UTC+9</li>
        <li>Winner Announcement:2024.04.25 10:30 UTC+9</li>
      </Ul>
      <Paragraph>
        All times are written in Japan Standard Time (JST). YOU ARE RESPONSIBLE
        FOR IDENTIFYING THE RELEVANT TIME ZONE IN YOUR LOCATION. The competition
        will take place from the specified start date and time until the
        designated end date and time as outlined on the website, with the
        possibility of modifications. Any revised or supplementary deadlines
        will be communicated through the website. It is your duty to routinely
        monitor the website for updates on any changes to the deadlines.
      </Paragraph>

      <Heading>Submission</Heading>
      <Paragraph>
        Conditioned upon compliance with these rules, the Organizers will award
        Prizes to the participants with the highest scores ,which is evaluated
        by the the competition evaluation criteria(defined below). Participants
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
          Academic report(optional): Brief instruction of the method, 1-3
          page(excluding reference).Whether to submit the academic report is
          optional.if there is any related information used to derive the
          results, these information must be contained in their academic report.
        </li>
      </Ul>
      <Paragraph>
        A third party should be able to use your submitted source to regenerate
        your results by evaluating scores. To achieve it, participants are
        require to ensure that their source code was tested by others including
        organizer.Submissions are void if they are in whole or in part
        illegible, incomplete, damaged,altered, counterfeit, obtained through
        fraud or, late.
      </Paragraph>

      <Heading>The Competition Evaluation Criteria</Heading>
      <Paragraph>
        In this competition, we set three maps with different scalability and
        shapes. As for each map, we set a 10 patterns with different starts and
        goals. Therefore, the above three maps with ten patterns would result in
        30 result data which are used to calculate the average values for goal
        rate and moving time. The evaluation will firstly be based on the goal
        rate of all agents. If they reach a same goal rate, the moving time
        would be the indicator to rank. We set two phases of submission where
        the pre-submission phase is used to test the which are not relevant to
        the final evaluation. The scores submitted during the final submission
        phase will be considered for the final evaluation. During the final
        submission phase, participants can submit their programs with many
        times, the highest score from the submission will be used for the final
        evaluation.
      </Paragraph>

      <Heading>Finalist</Heading>
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
        If a team fails to meet these criteria, the participant cannot be
        selected as a finalist, regardless of their score. The announcement of
        finalists for this competition is made on the website. Certificates will
        be provided to all participants whose programs run successfully.
        Furthermore, we will select three teams as finalists based on their
        ability to achieve a higher average goal rate among five maps. In the
        event of a tie in the goal rate, the moving time will serve as the
        ranking indicator. Considering prize distribution, we contemplate
        providing the following prize fees to the winners:
      </Paragraph>
      <Ul>
        <li>1st $300</li>
        <li>2nd $200</li>
        <li>3rd $100</li>
      </Ul>
      <Paragraph>
        Finalists must return prize acceptance documents within 15 days after
        the finalist announcement day (please see above). Failure to do so will
        result in the prizes not being awarded. By accepting a prize, you agree
        that the organizers and their agencies may use your name and/or likeness
        for advertising and promotional purposes without additional
        compensation, unless prohibited by law.
      </Paragraph>

      <Heading>Others</Heading>
      <Paragraph>
        While participants are allowed to modify the functions within the
        environment, they are not permitted to alter the fundamental behavior of
        the agents. For example, changing the definition of collisions or
        expanding the range of agent movement beyond nodes and edges would not
        be allowed.
      </Paragraph>
    </Content>
  );
}
