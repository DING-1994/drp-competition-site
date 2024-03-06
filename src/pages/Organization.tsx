import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
// import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Content from "../components/body/Content";
import Ul from "../components/paragraphComponents/UnorderedList";

export default function Organization({ index, value }: PageProps) {
  return (
    <Content index={index} value={value}>
      <HeadingWithLink id="organizers">Board Members</HeadingWithLink>
      <Ul>
        <li>
          Prof. Shiyao Ding (Kyoto University,{" "}
          <a href="https://www.dingshiyao.com/">HP</a>)
        </li>
        <li>
          Dr. Hideki Aoyama (Panasonic Holdings Corporation,{" "}
          <a href="https://hidekia.github.io/">HP</a>)
        </li>
        <li>
          Prof. Donghui Lin (Okayama University,{" "}
          <a href="https://lindh.github.io/">HP</a>)
        </li>
        <li>
          Prof. Fumito Uwano (Okayama University,{" "}
          <a href="https://soran.cc.okayama-u.ac.jp/html/24d9a3e377f2d39a74506e4da22f6611_en.html">
            HP
          </a>
          )
        </li>
      </Ul>
      <Ul>
      <HeadingWithLink id="organizers">Executive Committee</HeadingWithLink>
        <li>Mr. Ryo Magoshi (Kyoto University)</li>
        <li>Mr. Lee Kunwoo (Kyoto University)</li>
        <li>Mr. Atsushi Yanagisawa (Kyoto University)</li>
      </Ul>
      <HeadingWithLink id="advisory">Advisory Board</HeadingWithLink>
      <Ul>
        <li>
          Prof. Takayuki Ito (Kyoto University,{" "}
          <a href="http://www.agent.soc.i.kyoto-u.ac.jp/~ito/">HP</a>)
        </li>
      </Ul>
    </Content>
  );
}
