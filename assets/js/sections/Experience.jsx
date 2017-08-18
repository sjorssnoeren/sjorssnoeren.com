import React from 'react';
import styled from 'styled-components';

import Equalizer from 'react-equalizer';
import HeightMatchingGroup from 'react-height-matching-group'

import { Container, Row, Col } from '../components/Grid.jsx';

import { SectionTitle, Text, Link, Strong } from '../components/Typography.jsx';
import Section from '../components/Section.jsx';

import forzaDigitalLogo from '../../../assets/images/forza-digital.png';
import forzaDigitalLogoRetina from '../../../assets/images/forza-digital@2x.png';

import ristrettoLogo from '../../../assets/images/ristretto.png';
import ristrettoLogoRetina from '../../../assets/images/ristretto@2x.png';

import radboudLogo from '../../../assets/images/radboud.png';
import radboudLogoRetina from '../../../assets/images/radboud@2x.png';

import blendleLogo from '../../../assets/images/blendle.png';
import blendleLogoRetina from '../../../assets/images/blendle@2x.png';

import appleLogo from '../../../assets/images/apple.png';
import appleLogoRetina from '../../../assets/images/apple@2x.png';

const items = [{
  title: 'Forza-Digital.com',
  link: 'https://forza-digital.com',
  images: {
    regular: forzaDigitalLogo,
    retina: forzaDigitalLogoRetina,
  },
  description: 'At Forza Digital I\'ve been leading the development team. I\'ve been there from the start and personally streamlined the workflow of creating websites and apps.',
}, {
  title: 'Ristretto.co',
  link: 'http://ristretto.co',
  images: {
    regular: ristrettoLogo,
    retina: ristrettoLogoRetina,
  },
  description: 'Together with two friends, I co-founded Ristretto. We\'ve created digital products for leading corporates. I\'ve been responsible for the technical side of our products as well as visual direction.',
}, {
  title: 'RadboudUMC REshape',
  link: 'http://radboudreshapecenter.com',
  images: {
    regular: radboudLogo,
    retina: radboudLogoRetina,
  },
  description: 'At Radboud I was a part of the innovation group. We\'ve streamlined the business processes at the hospital with digital products.',
}, {
  title: 'Blendle.com',
  link: 'http://blendle.com',
  images: {
    regular: blendleLogo,
    retina: blendleLogoRetina,
  },
  description: 'I\'ve helped making the app responsive and compatible with the iPad. I\'ve also helped making performance improvements for the Blendle trending app.',
}, {
  title: 'WWDC Scholarship 2014',
  link: 'https://developer.apple.com/wwdc',
  images: {
    regular: appleLogo,
    retina: appleLogoRetina,
  },
  description: 'I\'ve received an Apple WWDC Student Scholarship back in 2014.',
}, {
  title: 'Freelance',
  link: 'http://sjorssnoeren.com',
  description: 'I\'ve worked with people from all over the world to help them create websites and apps.',
}];

const ExperienceCard = styled.div`
  background-color: #FBFBFB;
  padding: 40px 20px;
  margin-bottom: 20px;

  img {
    margin-bottom: 20px;
  }

  a {
    color: #000;
  }

  transition: 200ms ease-out transform, 200ms ease-out background-color, 200ms ease-out box-shadow;

  &:hover {
    background-color: #ffffff;
    /* Box-shadow inspired by design.google.com */
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
  }

  &:active {
    box-shadow: none;
    transform: none;
  }

  @media screen and (max-width: 40em) {
    width: 100%;
    margin-left: -10px;
    padding: 20px 10px;
  }
`;

const ExperienceLogoPlaceholder = styled.div`
  height: 36px;
  width: 1px;
`;

const ExperienceCardLink = styled(Link)``;

const Experience = (props) => {
  return (
    <Section>
      <Container>
        <SectionTitle>Experience</SectionTitle>

        <Row wrap="wrap" align="flex-start">
          {items.map((item) => (
            <Col width={[1, 1/2, 1/3]} key={item.title}>
              <ExperienceCardLink href={item.link} rel="nofollow">
                <ExperienceCard className="match-height">
                  {item.images != null ? (
                    <img src={item.images.regular}
                        srcSet={`${item.images.regular} 1x, ${item.images.retina} 2x`}
                        alt={item.title} />
                  ) : <ExperienceLogoPlaceholder />}
                  <br />

                  <Text><Strong>{item.title}</Strong></Text>
                  <Text>{item.description}</Text>
                </ExperienceCard>
              </ExperienceCardLink>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Experience;
