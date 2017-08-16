import React from 'react';
import styled from 'styled-components';

import { darkestGray } from '../colors.js';

import { Container, Row, Col } from '../components/Grid.jsx';

import { SectionTitle, Text, Link } from '../components/Typography.jsx';
import Section from '../components/Section.jsx';

import Nav from '../components/Nav.jsx';

const FooterBackground = styled.div`
  background-color: ${darkestGray};

  &:after {
    display: block;
    content: '';
    clear: both;
  }

  p {
    font-size: 20px;
    padding: 54px 0;
    display: block;
    float: left;
    line-height: 1.2;
  }

  @media screen and (max-width: 40em) {
    text-align: center;

    p {
      font-size: 16px;
      padding: 22px 0 0 0;
      width: 100%;
    }

    ul {
      width: 100%;
    }
  }

  a {
    line-height: 1.4;
  }
`;

const Footer = (props) => {
  return (
    <FooterBackground>
      <Container>
        <Text>Source available on <Link href="https://github.com/sjorssnoeren/sjorssnoeren.com">Github</Link></Text>
        <Nav links={[
          { title: 'Twitter', href: 'https://twitter.com/sjorssnoeren' },
          { title: 'Github', href: 'https://github.com/sjorssnoeren' },
          { title: 'Dribbble', href: 'https://dribbble.com/sjorssnoeren' },
        ]} />
      </Container>
    </FooterBackground>
  );
};

export default Footer;
