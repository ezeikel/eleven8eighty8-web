import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.ul `
  display: grid;
  padding: var(--spacing-medium);
`;

const Home = () => (
  <Wrapper>
    <h1>We Discover, Design &amp; Build Digital Experiences to Help Brands.</h1>
    <Link to={`/`}>Learn More</Link>
    <h2>A Creative Digital Agency specialising in Web Design and Development, we combine innovation with digital craftmanship to help brands fulfill their potential.</h2>
  </Wrapper>
);

export default Home;