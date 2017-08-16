import React from 'react';

import { Container, Row, Col } from '../components/Grid.jsx';

import { SectionTitle, Text, Link } from '../components/Typography.jsx';
import Section from '../components/Section.jsx';

const About = (props) => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle>About me</SectionTitle>

        <Row>
          <Col width={[1, 1/2]}>
            <Text>I’ve been working as a software engineer for Forza Digital over the last few years. I’m currently focussing on iOS apps, however I’ve gained a lot of experience from the web in the past. I’m excited about upcoming technologies &amp; paradigms such as: <Link href="https://swift.org">Swift</Link>, <Link href="https://facebook.github.io/react/">React</Link> &amp; <Link href="http://redux.js.org/">Redux</Link>.</Text>
          </Col>
          <Col width={[1, 1/2]}>
            <Text>I believe passion drives the best results for an individual as well as compassion drives the best results for a team. I’m inspired by companies like <Link href="https://m.signalvnoise.com">Basecamp</Link> and for their vision on this topic. I’m always eager to help out any individual in the field, so don’t be shy to reach out.</Text>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
