import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';


const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  color: var(--color-black);;
  h1 {
    color: var(--color-black);
    text-align: center;
  }
  @media (min-width: 792px) {
    display: flex;
  grid-template-columns: 300px 1fr;
  }
`;

const Header = () => (
  <Wrapper>
    <h1>Header</h1>
  </Wrapper>
);

export default Header;