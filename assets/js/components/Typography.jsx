import styled from 'styled-components';
import { darkestGray, blue } from '../colors.jsx';

export const Title = styled.h1`
  color: #ffffff;
  font-size: 45px;
  font-weight: 300;

  @media screen and (min-width: 64em) {
    font-size: 56px;
  }

  @media screen and (max-width: 40em) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: rgba(255, 255, 255, 0.4);
  font-size: 45px;
  font-weight: 300;

  @media screen and (min-width: 64em) {
    font-size: 56px;
  }

  @media screen and (max-width: 40em) {
    font-size: 35px;
  }
`;

export const LargeSectionTitle = styled.h3`
  font-size: 35px;
  font-weight: 300;
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;

  @media screen and (max-width: 40em) {
    margin-bottom: 10px;
  }
`;

export const h4 = styled.h4``;
export const h5 = styled.h5``;

export const Text = styled.p`
  color: #AFAFAF;
  font-size: 16px;
  line-height: 1.75;

  @media screen and (max-width: 40em) {
    font-size: 15px;
  }
`;

export const Strong = styled.strong`
  color: ${darkestGray};
  font-weight: 400;
`;

export const PaddedText = Text.extend`margin-bottom: 30px`;

export const Link = styled.a`
  color: ${blue};
  text-decoration: none;
  line-height: 1.75;
  position: relative;

  &:after {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -3px;
    background-color: rgba(12, 123, 251, 0.3);
    transition: 150ms ease-in-out width;
  }

  &:hover:after {
    width: 100%;
  }
`;
