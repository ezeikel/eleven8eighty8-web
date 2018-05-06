import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul `
  display: grid;
  padding: var(--spacing-medium);
`;

const About = () => (
  <Wrapper>
    <h2>1188 is a design and technology ideas company.</h2>
    <p>We help ambitious companies create new value with design- and technology-based products and strategies. We power their momentum by transforming the way they think and work.</p>
    <h2>What we do</h2>
    <p>We design and build technology-based solutions that create new value and new markets.</p>
  </Wrapper>
);

export default About;