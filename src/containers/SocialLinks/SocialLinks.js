import React from 'react';
import Twitter from './Twitter/Twitter';
import Facebook from './Facebook/Facebook';
import Instagram from './Instagram/Instagram';
import LinkedIn from './LinkedIn/LinkedIn';
import styled from 'styled-components';

const Wrapper = styled.ul `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  a {
    height: 100%;
    width: 100%;
    color: var(--color-white);
  }
  svg {
    fill: var(--color-white);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 80px);
    width: auto;
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
    align-self: end;
  }
`;

const SocialLinks = () => (
  <Wrapper>
    <li><a href="https://twitter.com/eleven8eighty8"><Twitter /></a></li>
    <li><a href="https://facebook.com/eleven8eighty8"><Facebook /></a></li>
    <li><a href="https://instagram.com/eleven8eighty8"><Instagram /></a></li>
    <li><a href="https://www.linkedin.com/company/eleven-8eighty8/"><LinkedIn /></a></li>
  </Wrapper>
);

export default SocialLinks;