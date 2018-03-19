import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  transform: translateX(${props => props.active === 'is-active' ? '0' : '-100vh'});
  transition: all 0.3s ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: var(--color-white);
`;

const MobileMenuList = styled.ul`
  display: grid;
  justify-content: center;
  align-content: start;
  grid-row-gap: var(--spacing-large);
  height: 100%;
  margin-top: 400px;
  font-size: var(--spacing-large);
  text-align: center;
`;

const MobileMenu = (props) => (
  <Overlay active={props.active}>
    <MobileMenuList>
      <li>Who are we</li>
      <li>Services</li>
      <li>Contact</li>
    </MobileMenuList>
  </Overlay>
);

export default MobileMenu;