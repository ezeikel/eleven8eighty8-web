import React from 'react';
import Twitter from './Twitter/Twitter';
import Facebook from './Facebook/Facebook';
import Instagram from './Instagram/Instagram';
import LinkedIn from './LinkedIn/LinkedIn';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  svg {
    fill: grey;
  }
`;

const SocialLinks = () => (
  <Wrapper>
    <a href="https://twitter.com/eleven8eighty8"><Twitter /></a>
    <a href="https://facebook.com/eleven8eighty8"><Facebook /></a>
    <a href="https://instagram.com/eleven8eighty8"><Instagram /></a>
    <a href="https://linkedin.com/eleven8eighty8"><LinkedIn /></a>
  </Wrapper>
);

export default SocialLinks;