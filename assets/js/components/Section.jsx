import styled from 'styled-components';

export default styled.div`
  /* Negative margin added to make sure the fixed navigation will
  not overlap with scrolling anchors */
  margin-top: -70px;
  /* Visible padding-top 70px */
  padding-top: 140px;

  @media screen and (max-width: 40em) {
    margin-top: -60px;
    /* Visible padding-top 30px */
    padding-top: 90px;
  }
`;

export const FirstSectionPaddingTop = styled.div`height: 20px;`;

