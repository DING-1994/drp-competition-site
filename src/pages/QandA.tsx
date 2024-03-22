import Content from "../components/body/Content";
import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";

export default function QandA({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="q-and-a">Q&A</HeadingWithLink>
      <Paragraph>
        Please be free to consult with{" "}
        <a href="drpchallenge@googlegroups.com">
          drpchallenge[at]googlegroups.com
        </a>
        , if you have any question.
      </Paragraph>
      <Paragraph>
        In addition, please refer this{" "}
        <a href="https://github.com/DrpChallenge/main/blob/main/assets/markdown/FAQ.md">
          Frequently Asked Questions
        </a>{" "}
        page.
      </Paragraph>
    </Content>
  );
}
