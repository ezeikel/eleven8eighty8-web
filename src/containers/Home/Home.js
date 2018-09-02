import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Contact from '../Contact/Contact';

const Wrapper = styled.div `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr auto 1fr;
  grid-row-gap: var(--spacing-huge);
  padding: 0 var(--spacing-large);
`;

const TagLine = styled.h1`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
  font-size: 76px
  line-height: 70px;
  color: var(--color-secondary);
  letter-spacing: -5px;
  @media(min-width: 768px) {
    font-size: 96px;
    line-height: 83px;
  }
`;

const SubTagLine = styled.h3`
  grid-row: 3 / span 1;
  grid-column: 1 / -1;
  font-size: 32px;
  line-height: 43px;
  letter-spacing: -2px;
  color: var(--color-black);
  @media(min-width: 768px) {
    font-size: 42px;
    line-height: 52px;
  }
`;

const StyledLink = styled(Link)`
  grid-row: 2 / span 1;
  grid-column: 1 / -1
  display: grid;
  place-items: center;
  border: 3px solid var(--color-tertiary);
  border-radius: 4px;
  color: var(--color-white);
  background-color: var(--color-tertiary);
  font-size: 22px;
  font-weight: bold;
  padding: var(--spacing-medium) var(--spacing-large);
  color: var(--color-white);
  background-color: var(--color-tertiary);
  @media (min-width: 768px) {
    grid-column: 1 / 3;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #6043ED;
      border-color: #6043ED;
    }
  }
`;

const StyledContact = styled(Contact)`
  grid-column: 1 / -1;
`;

const Home = () => (
  <Wrapper>
    <TagLine>We Discover, Design &amp; Build Digital Experiences to Help Brands.</TagLine>
    <StyledLink to={`/who-we-are`}>Learn More</StyledLink>
    <SubTagLine>A Creative Digital Agency specialising in Web Design and Development, we combine innovation with digital craftmanship to help brands fulfill their potential.</SubTagLine>
    <StyledContact />
  </Wrapper>
);

export default Home;