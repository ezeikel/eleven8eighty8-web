import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  padding-top: calc(var(--header-height) * 2);
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
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuList = styled.ul`
  display: grid;
  justify-content: center;
  align-content: start;
  grid-row-gap: var(--spacing-large);
  height: 100%;
  transition: all 0.3s ease-in-out;
  font-weight: 300;
  text-align: center;
  a {
    color: var(--color-white);
  }
`;

const StyledLink = styled(Link)`
  font-size: 36px;
  line-height: 55px;
  text-transform: uppercase;
  font-weight: bold;
`;

const MobileMenu = ({ active, toggleActive }) => (
  <Overlay active={active}>
    <MobileMenuList>
      <li><StyledLink onClick={toggleActive} to={`/`}>Home</StyledLink></li>
      <li><StyledLink onClick={toggleActive} to={`/who-we-are`}>Who are we</StyledLink></li>
      <li><StyledLink onClick={toggleActive} to={`/services`}>Services</StyledLink></li>
      <li><StyledLink onClick={toggleActive} to={`/contact`}>Contact</StyledLink></li>
    </MobileMenuList>
  </Overlay>
);

export default MobileMenu;