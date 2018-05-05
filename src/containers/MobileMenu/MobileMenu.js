import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  transform: translateY(${({ active }) => active ? '0' : '-100vh'});
  transition: all 0.3s ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: var(--color-primary);
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
  a {
    color: var(--color-white);
  }
`;

const MobileMenu = ({ active }) => (
  <Overlay active={active}>
    <MobileMenuList>
      <li><Link to={`/who-we-are`}>Who are we</Link></li>
      <li><Link to={`/services`}>Services</Link></li>
      <li><Link to={`/contact`}>Contact</Link></li>
    </MobileMenuList>
  </Overlay>
);

export default MobileMenu;