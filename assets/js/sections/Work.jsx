import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../components/Grid.jsx';

import { LargeSectionTitle, SectionTitle, PaddedText, Text, Link } from '../components/Typography.jsx';
import Section from '../components/Section.jsx';

import appstoreButton from '../../../assets/images/appstore-button.png';
import appstoreButtonRetina from '../../../assets/images/appstore-button@2x.png';

import springTimePhone from '../../../assets/images/springtime-iphone.png';
import springTimePhoneRetina from '../../../assets/images/springtime-iphone@2x.png';

import wordcrexPhone from '../../../assets/images/wordcrex-iphone.png';
import wordcrexPhoneRetina from '../../../assets/images/wordcrex-iphone@2x.png';

import noKiddinPad from '../../../assets/images/nokiddin-ipad.png';
import noKiddinPadRetina from '../../../assets/images/nokiddin-ipad@2x.png';

import biermasterPhone from '../../../assets/images/biermaster-iphone.png';
import biermasterPhoneRetina from '../../../assets/images/biermaster-iphone@2x.png';


const items = [{
  title: 'SpringTime for iOS',
  images: {
    regular: springTimePhone,
    retina: springTimePhoneRetina,
  },
  link: 'https://itunes.apple.com/nl/app/springtime/id1043571991?mt=8',
  partners: ['Ristretto'],
  description: 'Together with FlexiForce we designed and developed a mobile app called SpringTime. FlexiForce is a company which offers standardized hardware parts for overhead doors to small and midsize companies across Europe and North America. I\'ve been responsible for the iPhone app.',
  backgroundColor: '#DE332B',
}, {
  title: 'WordCrex for iOS',
  images: {
    regular: wordcrexPhone,
    retina: wordcrexPhoneRetina,
  },
  link: 'https://itunes.apple.com/us/app/wordcrex-the-fair-word-game/id1045201023?mt=8',
  partners: ['Forza Digital'],
  description: 'Together with two dutch tech entrepeneurs we\'ve created the next generation wordgame. The new set of features really makes an outstanding product. I\'ve been responsible for the iPhone app, the iPad app and webservice.',
  backgroundColor: '#262161',
}, {
  title: 'No\' Kiddin for iPad',
  images: {
    regular: noKiddinPad,
    retina: noKiddinPadRetina,
  },
  link: 'https://itunes.apple.com/nl/app/no-kiddin/id1016421096?mt=8',
  partners: ['Ristretto', 'INTK'],
  description: 'On behalf of INTK we developed an iPad app for the Van Abbemuseum in Eindhoven. By displaying its collection with an app in the waiting room of the hospital Radboudumc Nijmegen, the museum aims to bring its collection beyond its walls. I\'ve been responsible for the iPad app.',
  backgroundColor: '#0C0C0C',
}, {
  title: 'Biermaster for iOS',
  images: {
    regular: biermasterPhone,
    retina: biermasterPhoneRetina,
  },
  link: 'https://itunes.apple.com/nl/app/bier-master/id991020242?mt=8',
  partners: ['Forza Digital', 'Sitesupport'],
  description: 'One of the largest breweries in the Netherlands (ABInBev) invented an app to teach bartenders new kinds of beer and help them appreciate its taste. It\'s possible to take tests to make sure you understand the theory behind the beers. I\'ve been responsible for the 2nd version of the iPhone app.',
  backgroundColor: '#FE6647',
}];

const WorkItem = styled.div`
  h3 {
    color: #ffffff;
  }

  h3 a {
    color: #ffffff;
    &:after {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 1100px) {
    /* Not really sure why the grid is causing to overflow about 8px */
    padding: 0 8px;
  }
`;

const WorkCol = styled(Col)`
  padding: 30px 0;

  @media screen and (max-width: 40em) {
    order: initial;
    text-align: left !important;
  }
`;

const AppStoreButton = styled.a`
  width: 161px;
  height: 50px;
  display: inline-block;
  background-image: url(${appstoreButton});
  background-size: 161px 50px;
  color: rgba(255, 255, 255, 0.0);
  margin-top: 30px;
  user-select: none;
  transition: 200ms ease-out transform;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${appstoreButtonRetina});
  }

  @media screen and (max-width: 40em) {
    margin-bottom: -20px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const DeviceImage = styled.img`
  margin: 0 auto;
  display: block;
  max-width: 100%;
`;

const Work = (props) => {
  return (
    <Section id="work">
      <Container>
        <SectionTitle>Featured work</SectionTitle>

        <Row>
          <Col width={[1, 1/2]}>
            <PaddedText>The products I've developed reached thousands of people. Underneath is a selection of the ones I'm most proud of.</PaddedText>
          </Col>
        </Row>
      </Container>

      {items.map((item, index) => {
        const textAlign = index % 2 == 0 ? 'left' : 'right';

        return (
          <WorkItem key={index} style={{ backgroundColor: item.backgroundColor }}>
            <Container>
              <Row align="center" wrap="wrap">
                <WorkCol width={[1, 1/2]} key="0" order={index % 2 == 0 ? 0 : 1} style={{ textAlign }}>
                  <LargeSectionTitle><Link href={item.link}>{item.title}</Link></LargeSectionTitle>
                  <PaddedText>{item.partners.join(' & ')}</PaddedText>
                  <Text>{item.description}</Text>
                  <AppStoreButton href={item.link}>Download on the AppStore</AppStoreButton>
                </WorkCol>

                <WorkCol width={[1, 1/2]} key="1">
                  <DeviceImage src={item.images.regular} srcSet={`${item.images.regular} 1x, ${item.images.retina} 2x`} />
                </WorkCol>
              </Row>
            </Container>
          </WorkItem>
        );
      })}
    </Section>
  );
};

export default Work;
