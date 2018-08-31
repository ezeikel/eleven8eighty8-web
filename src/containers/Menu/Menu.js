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

const Menu = ({ active }) => (
  //TODO: This is still rendering on mobile when not active.
  !active ?
    <MenuList>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/who-we-are`}>Who are we</Link></li>
        <li><Link to={`/services`}>Services</Link></li>
        <li><Link to={`/contact`}>Contact</Link></li>
    </MenuList>
  : ''
);

export default Menu;