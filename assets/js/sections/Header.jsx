import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle } from '../components/Typography.jsx';
import { Container, Row, Col } from '../components/Grid.jsx';

import Nav from '../components/Nav.jsx';

import heroBackgroundImage from '../../../assets/images/hero-background.png';

const Hero = styled.div`
  height: 568px;
  background-image: url(${heroBackgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 15, 47, 0.75);
`;

const HeroText = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 54px;
`;

const Header = (props) => {
  return (
    <Hero>
      <HeroOverlay>
        <Container>
          <Nav links={[
            { title: 'About', href: '#about' },
            { title: 'Work', href: '#work' },
            { title: 'Contact', href: '#contact' },
          ]} />
        </Container>

        <HeroText>
          <Container>
            <Title>Sjors Snoeren</Title>
            <SubTitle>Software Engineer</SubTitle>
          </Container>
        </HeroText>
      </HeroOverlay>
    </Hero>
  );
};

export default Header;
