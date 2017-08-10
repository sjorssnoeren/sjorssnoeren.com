import React from 'react';

import { Container, Row, Col } from 'react-grid-system';

import { SectionTitle, Text } from '../components/Typography.jsx';
import Section from '../components/Section.jsx';

const About = (props) => {
  return (
    <Section>
      <Container>
        <SectionTitle>About me</SectionTitle>

        <Row>
          <Col sm={6}>
            <Text>I’ve been working as a software engineer for Forza Digital over the last few years. I’m currently focussing on iOS apps, however I’ve gained a lot of experience from the web in the past. I’m excited about upcoming technologies & paradigms such as: Swift, React & Redux.</Text>
          </Col>
          <Col sm={6}>
            <Text>I believe passion drives the best results for an individual as well as compassion drives the best results for a team. I’m inspired by companies like Basecamp and Medium for their vision on this topic. I’m always eager to help out any individual in the field, so don’t be shy to reach out.</Text>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;