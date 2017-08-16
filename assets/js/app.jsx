import styled from 'styled-components';

import 'zenscroll';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './sections/Header.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Work from './sections/Work.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

const AppContainer = styled.div`
  -webkit-font-smoothing: antialiased;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  a {
    text-decoration: none;
  }
`;

const App = (props) => {
  return (
    <AppContainer>
      <Header />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </AppContainer>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
