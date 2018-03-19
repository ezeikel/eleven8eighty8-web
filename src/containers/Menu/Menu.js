import React from 'react';
import styled from 'styled-components';

const MenuList = styled.ul`
  display: none;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: var(--spacing-large);
  text-transform: uppercase;
  font-family: "aglet-slab", sans-serif;
  font-size: 18px;
  @media (min-width: 768px) {
    display: grid;
  }
`;

const Menu = () => (
  <MenuList>
      <li>Who are we</li>
      <li>Services</li>
      <li>Contact</li>
  </MenuList>
);

export default Menu;