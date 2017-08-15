import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../components/Grid.jsx';

import { SectionTitle, Text, Link } from '../components/Typography.jsx';
import { Label, Input, TextArea, Button } from '../components/Form.jsx';

import Section from '../components/Section.jsx';

const ContactForm = styled.form`background-color: #EFEFEF; padding: 90px 0;`;

const Contact = (props) => {
  return (
    <Section>
      <Container>
        <SectionTitle>Let’s get in touch</SectionTitle>
      </Container>

      <ContactForm>
        <Container>
          <Row>
            <Col width={1/3}>
              <Label>Name</Label>
              <Input />
            </Col>
            <Col width={1/3}>
              <Label>Email</Label>
              <Input />
            </Col>
          </Row>

          <Row>
            <Col width={2/3}>
              <Label>Message</Label>
              <TextArea rows="6"></TextArea>

              <Button type="submit" value="Send message" />
            </Col>
          </Row>
        </Container>
      </ContactForm>
    </Section>
  );
};

export default Contact;
