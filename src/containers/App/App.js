import '../../globalStyles';
import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(--header-height) 1fr auto;
  grid-row-gap: var(--spacing-huge);
  min-height: 100vh;
  background-color: var(--color-primary);
`;

const App = () => (
  <Container>
    <Header />
    <Main />
    <Footer />
  </Container>
);

export default App;