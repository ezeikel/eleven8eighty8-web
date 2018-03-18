import React, { Component } from 'react';

import styled from 'styled-components';
import Hamburger from '../../containers/Hamburger/Hamburger';
import logo from '../../assets/1188.svg';


const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  position: relative;
  h1 {
    font-size: 24px;
    margin: 0;
  }
`;

const Logo = styled.img`
  justify-self: start;
  height: 32px;
`;

class Header extends Component {
  state = {
    active: false
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <Wrapper>
        <Logo src={logo}/>
        <Hamburger active={this.state.active ? 'is-active' : null} toggleActive={this.toggleActive}/>
      </Wrapper>
    )
  }
};

export default Header;