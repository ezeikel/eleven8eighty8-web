import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuList = styled.ul`
  display: none;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: var(--spacing-large);
  text-transform: uppercase;
  font-size: 18px;
  @media (min-width: 768px) {
    display: grid;
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-black);
  font-weight: bold;
`;

const Menu = ({ active }) => (
  //TODO: This is still rendering on mobile when not active.
  !active ?
    <MenuList>
        <li><StyledLink to={`/`}>Home</StyledLink></li>
        <li><StyledLink to={`/who-we-are`}>Who are we</StyledLink></li>
        <li><StyledLink to={`/services`}>Services</StyledLink></li>
        <li><StyledLink to={`/contact`}>Contact</StyledLink></li>
    </MenuList>
  : ''
);

export default Menu;