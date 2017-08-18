import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../components/Grid.jsx';

import { SectionTitle, Text, Link } from '../components/Typography.jsx';
import Section, { FirstSectionPaddingTop } from '../components/Section.jsx';

const AboutCol = styled(Col)`margin-bottom: 20px`;

const About = (props) => {
  return (
    <Section id="about">
      <FirstSectionPaddingTop />

      <Container>
        <SectionTitle>About me</SectionTitle>

        <Row wrap="wrap">
          <AboutCol width={[1, 1/2]} key="0">
            <Text>I've been working as a software engineer at Forza Digital for the last few years. I'm currently focussing on iOS apps development, however in the past I've gained a lot of experience coding for the web. I'm excited about upcoming technologies &amp; paradigms such as: <Link href="https://swift.org">Swift</Link>, <Link href="https://facebook.github.io/react/">React</Link> &amp; <Link href="http://redux.js.org/">Redux</Link>.</Text>
          </AboutCol>
          <AboutCol width={[1, 1/2]} key="1">
            <Text>I believe passion drives the best results for an individual whereas compassion drives the best results for a team. I'm inspired by companies like <Link href="https://m.signalvnoise.com">Basecamp</Link> for their vision on this topic. I'm always eager to help out any individual in the field, so don't hesitate to reach out.</Text>
          </AboutCol>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
