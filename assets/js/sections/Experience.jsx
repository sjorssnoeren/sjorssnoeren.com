import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../components/Grid.jsx';

import { SectionTitle, Text, Link } from '../components/Typography.jsx';
import Section from '../components/Section.jsx';

import forzaDigitalLogo from '../../../assets/images/forza-digital.png';
import ristrettoLogo from '../../../assets/images/ristretto.png';
import radboudLogo from '../../../assets/images/radboud.png';
import blendleLogo from '../../../assets/images/blendle.png';
import appleLogo from '../../../assets/images/apple.png';

const items = [{
  title: 'Forza-Digital.com',
  link: 'https://forza-digital.com',
  image: forzaDigitalLogo,
  description: 'At Forza Digital I\'ve been leading the team with a handful developers. I\'ve been there from the beginning and personally streamlined the workflow of creating websites and apps.',
}, {
  title: 'Ristretto.co',
  link: 'http://ristretto.co',
  image: ristrettoLogo,
  description: 'Together with two friends, I co-founded Ristretto. We\'ve created stunning digital products for leading corporates from day one. I\'ve been responsible for the technical side of our products as well as visual direction.',
}, {
  title: 'RadboudUMC REshape',
  link: 'http://radboudreshapecenter.com',
  image: radboudLogo,
  description: 'At Radboud I was a part of the innovation group. Within this group we\'ve streamlined the business processes from the hospital.',
}, {
  title: 'Blendle.com',
  link: 'http://blendle.com',
  image: blendleLogo,
  description: 'At Blendle I\'ve helped making the app responsive and compatible with the iPad. I\'ve also helped making performance improvements for the trending app.',
}, {
  title: 'WWDC Scholarship 2014',
  link: 'http://ristretto.co',
  image: appleLogo,
  description: 'I\'ve received an Apple WWDC Student Scholarship back in 2014.',
}, {
  title: 'Freelance',
  link: 'http://sjorssnoeren.com',
  description: 'As from a young age I\'ve been taking freelance projects as well. I\'ve worked with people from all over the world to help them create websites and apps.',
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
`;

const ExperienceCardNegativeSpace = styled.div`
  width: 100%;
  height: 0;
  margin-bottom: -20px;
`;

const Experience = (props) => {
  return (
    <Section>
      <Container>
        <SectionTitle>Experience</SectionTitle>

        <Row wrap={true}>
          {items.map((item) => (
            <Col width={1/2} key={item.title}>
              <ExperienceCard>
                <Link href={item.link} rel="nofollow">
                  {item.image != null ? (<img src={item.image} alt={item.title} />) : null}
                  <br />

                  {item.title}
                </Link>

                <Text>{item.description}</Text>
              </ExperienceCard>
            </Col>
          ))}
        </Row>

        <ExperienceCardNegativeSpace />
      </Container>
    </Section>
  );
};

export default Experience;
