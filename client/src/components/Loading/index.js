import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "./generic";
import "./styles.css";

const Loading = () => (
  <Section>
    <Title>React Loading</Title>
    {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="#fff" />
        <Prop>{l.name}</Prop>
      </Article>
    ))}
  </Section>
);

export default Loading;
