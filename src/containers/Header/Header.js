import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import logo from '../../assets/logo.png';


const Wrapper = styled.header`
  display: grid;
  justify-items: center;
`;

const Header = () => (
  <Wrapper>
    <img src={logo} />
  </Wrapper>
);

export default Header;