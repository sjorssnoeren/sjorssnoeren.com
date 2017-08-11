import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle } from '../components/Typography.jsx';
import { Container, Row, Col } from '../components/Grid.jsx';

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

const NavList = styled.ul`
  display: inline-block;
  float: right;
  padding: 54px 0;
  white-space: nowrap;
`;

const NavItem = styled.li`
  display: inline-block;
  font-size: 20px;
  margin-left: 50px;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const Nav = (props) => {
  return (
    <nav>
      <NavList>
        {props.links.map((link) => {
          return (<NavItem key={link}><a href="#">{link}</a></NavItem>);
        })}
      </NavList>
    </nav>
  );
};

const Header = (props) => {
  return (
    <Hero>
      <HeroOverlay>
        <Container>
          <Nav links={['About', 'Work', 'Contact']} />
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
