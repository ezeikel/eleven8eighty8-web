import '../../globalStyles';
import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, var(--header-height)) 1fr auto;
  min-height: 100vh;
`;

const App = () => (
  <Container>
    <Header />
    <Main />
    <Footer />
  </Container>
);

export default App;