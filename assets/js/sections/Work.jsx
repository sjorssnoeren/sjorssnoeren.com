import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../components/Grid.jsx';

import { LargeSectionTitle, SectionTitle, PaddedText, Text, Link } from '../components/Typography.jsx';
import Section from '../components/Section.jsx';

import appstoreButtonBackground from '../../../assets/images/appstore-button.png';

import springTimePhone from '../../../assets/images/springtime-iphone.png';
import wordcrexPhone from '../../../assets/images/wordcrex-iphone.png';
import noKiddinPad from '../../../assets/images/nokiddin-ipad.png';
import biermasterPhone from '../../../assets/images/biermaster-iphone.png';


const items = [{
  title: 'SpringTime for iOS',
  image: springTimePhone,
  link: 'https://itunes.apple.com/nl/app/springtime/id1043571991?mt=8',
  partners: ['Ristretto'],
  description: 'Together with FlexiForce we designed and developed a mobile app called SpringTime. FlexiForce is a company which offers standardized hardware parts for overhead doors to small and midsize companies across Europe and North America. Responsible for iOS app.',
  backgroundColor: '#DE332B',
}, {
  title: 'WordCrex for iOS',
  image: wordcrexPhone,
  link: 'https://itunes.apple.com/us/app/wordcrex-the-fair-word-game/id1045201023?mt=8',
  partners: ['Forza Digital'],
  description: 'Together with FlexiForce we designed and developed a mobile app called SpringTime. FlexiForce is a company which offers standardized hardware parts for overhead doors to small and midsize companies across Europe and North America. Responsible for iOS app.',
  backgroundColor: '#262161',
}, {
  title: 'No\' Kiddin for iPad',
  image: noKiddinPad,
  link: 'https://itunes.apple.com/nl/app/no-kiddin/id1016421096?mt=8',
  partners: ['Ristretto', 'INTK'],
  description: 'Together with FlexiForce we designed and developed a mobile app called SpringTime. FlexiForce is a company which offers standardized hardware parts for overhead doors to small and midsize companies across Europe and North America. Responsible for iOS app.',
  backgroundColor: '#0C0C0C',
}, {
  title: 'Biermaster for iOS',
  image: biermasterPhone,
  link: 'https://itunes.apple.com/nl/app/bier-master/id991020242?mt=8',
  partners: ['Forza Digital', 'Sitesupport'],
  description: 'Together with FlexiForce we designed and developed a mobile app called SpringTime. FlexiForce is a company which offers standardized hardware parts for overhead doors to small and midsize companies across Europe and North America. Responsible for iOS app.',
  backgroundColor: '#FE6647',
}];

const WorkItem = styled.div`
  h3 {
    color: #ffffff;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const AppStoreButton = styled.a`
  width: 161px;
  height: 50px;
  display: inline-block;
  background-image: url(${appstoreButtonBackground});
  color: rgba(255, 255, 255, 0.0);
  margin-top: 30px;
  user-select: none;
`;

const DeviceImage = styled.img`
  margin: 30px auto;
  display: block;
`;

const Work = (props) => {
  return (
    <Section>
      <Container>
        <SectionTitle>Highlighted work</SectionTitle>

        <Row>
          <Col width={1/2}>
            <PaddedText>Products I’ve developed reached thousands of people. Underneath is a selection of the ones I’m most proud of.</PaddedText>
          </Col>
        </Row>
      </Container>

      {items.map((item, index) => {
        const textDirection = index % 2 == 0 ? 'left' : 'right';

        return (
          <WorkItem style={{backgroundColor: item.backgroundColor}}>
            <Container>
              <Row align="center">
                <Col width={1/2} order={index % 2 == 0 ? 0 : 1} style={{'text-align': textDirection}}>
                  <LargeSectionTitle>{item.title}</LargeSectionTitle>
                  <PaddedText>{item.partners.join(' & ')}</PaddedText>
                  <Text>{item.description}</Text>
                  <AppStoreButton href={item.link}>Download on the AppStore</AppStoreButton>
                </Col>

                <Col width={1/2}>
                  <DeviceImage src={item.image} />
                </Col>
              </Row>
            </Container>
          </WorkItem>
        );
      })}
    </Section>
  );
};

export default Work;
