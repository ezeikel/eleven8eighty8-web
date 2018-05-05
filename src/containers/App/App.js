import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Main from '../Main/Main';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, var(--header-height)) 1fr;
`;

const App = () => (
  <Container>
    <Header />
    <Main />
  </Container>
);

export default App;