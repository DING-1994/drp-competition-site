import HeadingWithLink from "../components/paragraphComponents/HeadingWithLink";
import { Paragraph } from "../components/paragraphComponents/Paragraph";
import { PageProps } from "./props/PageProps";
import Content from "../components/body/Content";

export default function organization({ index, value }: PageProps) {return (
    <Content index={index} value={value}>
      <HeadingWithLink id="organizers">
      Organizers
      </HeadingWithLink>
      <Paragraph>
      The organizing team consists of experts and students from various institution.
      </Paragraph>
      <ul style={{ listStyle: 'circle', paddingLeft: '0' }}>
      <li>Shiyao Ding:Kyoto University,Assistant professor,<a href="https://www.dingshiyao.com/">HP</a></li>
      <li>Hideki Aoyama:Panasonic Holdings Corporation,<a href="https://hidekia.github.io/">HP</a></li>
      <li>Donghui Lin:Okayama University,Associate Professor,<a href="https://lindh.github.io/">HP</a></li>
      <li>Fumito Uwano:Okayama University,Assistant Professor,<a href="https://soran.cc.okayama-u.ac.jp/html/24d9a3e377f2d39a74506e4da22f6611_en.html">HP</a></li><br />
      <li>Ryo Magoshi:Kyoto University,student</li>
      <li>Lee Kunwoo:Kyoto University,student</li>
      <li>Atsushi Yanagisawa:Kyoto University,student </li>
      </ul>
    </Content>
    );
}
