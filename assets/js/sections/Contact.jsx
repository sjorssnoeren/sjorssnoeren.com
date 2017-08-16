import React, { Component } from 'react';
import styled from 'styled-components';

import { red, green, white } from '../colors.js';
import 'whatwg-fetch';

import { Container, Row, Col } from '../components/Grid.jsx';

import { SectionTitle, Text, Link } from '../components/Typography.jsx';
import { Label, Input, TextArea, Button } from '../components/Form.jsx';

import Section from '../components/Section.jsx';

const ContactForm = styled.form`
  background-color: #EFEFEF;
  padding: 90px 0;

  @media screen and (max-width: 40em) {
    padding: 40px 0;
  }
`;

const ContactMessage = styled.div`
  padding: 20px;
  margin-bottom: 20px;

  p { color: ${white}; }
`;

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseError: null,
      responseMessage: null,
      name: '',
      email: '',
      message: '',
    };
  }

  formDidSubmit(event) {
    event.preventDefault();

    fetch('/contact/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }),
    }).then((response) => {
      return response.json();
    }).then((json) => {
      const { message } = json;

      if (json.success === true) {
        this.setState({
          responseMessage: message,
          responseError: null,
          name: '',
          email: '',
          message: '',
        });

        document.getElementById('contact-form').reset();
      } else {
        this.setState({ responseMessage: null, responseError: message });
      }
    }).catch((err) => {
      this.setState({
        responseMessage: null,
        responseError: 'A server error occured. Please send your message to: mail@sjorssnoeren.com',
      });
    });
  }

  nameDidChange(event) {
    this.state.name = event.target.value;
  }

  emailDidChange(event) {
    this.state.email = event.target.value;
  }

  messageDidChange(event) {
    this.state.message = event.target.value;
  }

  render() {
    return (
      <Section id="contact">
        <Container>
          <SectionTitle>Let’s get in touch</SectionTitle>
        </Container>

        <ContactForm id="contact-form" onSubmit={this.formDidSubmit.bind(this)}>
          <Container>
            {this.state.responseError != null || this.state.responseMessage != null ? (
              <Row>
                <Col width={[1, 1, 2/3]}>
                  <ContactMessage style={{ backgroundColor: this.state.responseError ? red : green }}>
                    <Text>{this.state.responseError != null ? this.state.responseError : this.state.responseMessage}</Text>
                  </ContactMessage>
                </Col>
              </Row>
            ) : null}

            <Row wrap="wrap">
              <Col width={[1, 1/2, 1/3]}>
                <Label>Name</Label>
                <Input onChange={this.nameDidChange.bind(this)} />
              </Col>
              <Col width={[1, 1/2, 1/3]}>
                <Label>Email</Label>
                <Input onChange={this.emailDidChange.bind(this)} />
              </Col>
            </Row>

            <Row>
              <Col width={[1, 1, 2/3]}>
                <Label>Message</Label>
                <TextArea rows="6" onChange={this.messageDidChange.bind(this)}></TextArea>

                <Button type="submit" value="Send message" />
              </Col>
            </Row>
          </Container>
        </ContactForm>
      </Section>
    );
  }
};

export default Contact;
