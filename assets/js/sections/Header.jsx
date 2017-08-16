import React, { Component } from 'react';
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

  @media screen and (max-width: 40em) {
    height: 320px;
  }
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

  @media screen and (max-width: 40em) {
    margin-bottom: 24px;
  }
`;

const StickyHeaderBackground = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
`;


class StickyHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progressFactor: 0.0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.windowDidScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.windowDidScroll.bind(this));
  }

  render() {
    const invertedFactor = 1.0 - this.state.progressFactor;

    return (
      <StickyHeaderBackground style={{ backgroundColor: `rgba(0, 0, 0, ${this.state.progressFactor})` }}>
        <Container>
          <Nav padding={`${(invertedFactor * 30) + 24}px 0`} links={[
            { title: 'About', href: '#about' },
            { title: 'Work', href: '#work' },
            { title: 'Contact', href: '#contact' },
          ]} />
        </Container>
      </StickyHeaderBackground>
    );
  }

  windowDidScroll() {
    const currentY = window.scrollY;
    const endY = 350;

    const progressFactor = Math.min(1.0, currentY / endY);
    this.setState({ progressFactor });
  }
}

const Header = (props) => {
  return (
    <Hero>
      <HeroOverlay>
        <StickyHeader />

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
