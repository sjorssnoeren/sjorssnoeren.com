import React from 'react';
import styled from 'styled-components';

import { darkestGray } from '../colors.jsx';

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

  a {
    line-height: 1.4;
  }
`;

const Footer = (props) => {
  return (
    <FooterBackground>
      <Container>
        <Text>Site crafted with love. Source available on <Link href="https://github.com/sjorssnoeren/sjorssnoeren.com">GitHub</Link></Text>
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
