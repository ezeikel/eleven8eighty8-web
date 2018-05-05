import React, { Component } from 'react';
import styled from 'styled-components';
import Hamburger from '../../containers/Hamburger/Hamburger';
import MobileMenu from '../../containers/MobileMenu/MobileMenu';
import Menu from '../../containers/Menu/Menu';
import logoBlack from '../../assets/1188-black.png';
import logoWhite from '../../assets/1188-white.png';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  position: relative;
  padding: var(--spacing-medium);
  box-shadow: 0 2px 1.5rem 0 rgba(0,0,0,.1);
`;

const Logo = styled.img`
  width: 64px;
  z-index: 1;
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
        <Logo src={this.state.active ? logoWhite : logoBlack}/>
        <nav>
          <MobileMenu active={this.state.active} toggleActive={this.toggleActive}/>
          <Menu active={this.state.active} />
          <Hamburger active={this.state.active} toggleActive={this.toggleActive}/>
        </nav>
      </Wrapper>
    )
  }
};

export default Header;