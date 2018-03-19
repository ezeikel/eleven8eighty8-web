import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  transform: translateY(${props => props.active === 'is-active' ? '0' : '-100vh'});
  transition: all 0.3s ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: var(--color-white);
  ul {
    display: grid;
    justify-content: center;
    align-content: start;
    grid-row-gap: var(--spacing-large);
    height: 100%;
    margin-top: 400px;
    font-size: var(--spacing-large);
    text-align: center;
  }
`;

const Navigation = (props) => (
  <Wrapper active={props.active}>
    <ul>
      <li>Who are we</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>
  </Wrapper>
);

export default Navigation;