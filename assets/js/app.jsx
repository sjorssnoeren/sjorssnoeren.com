import styled from 'styled-components';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './sections/Header.jsx';
import About from './sections/About.jsx';

const AppContainer = styled.div`
  -webkit-font-smoothing: antialiased;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

const App = (props) => {
  return (
    <AppContainer>
      <Header />
      <About />
    </AppContainer>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
