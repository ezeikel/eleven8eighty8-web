import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
  transition: color 0.3s ease-in-out;
  &:hover {
    color: var(--color-primary);
  }
`;

const StyledHashLink = styled(HashLink)`
  color: var(--color-black);
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: var(--color-primary);
  }
`;

const Menu = ({ active }) => (
  //TODO: This is still rendering on mobile when not active.
  !active ?
    <MenuList>
        <li><StyledLink to={`/`}>Home</StyledLink></li>
        <li><StyledLink to={`/services`}>Services</StyledLink></li>
        <li><StyledLink to={`/who-we-are`}>Who are we</StyledLink></li>
        <li><StyledHashLink to={`/#contact`} smooth>Contact</StyledHashLink></li>
    </MenuList>
  : ''
);

export default Menu;