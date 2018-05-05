import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from '../../containers/Hamburger/Hamburger';
import MobileMenu from '../../containers/MobileMenu/MobileMenu';
import Menu from '../../containers/Menu/Menu';
import InlineSVG from '../../containers/InlineSVG/InlineSVG';
import Logo from '../../assets/1188.svg';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  position: relative;
  padding: var(--spacing-medium);
  box-shadow: 0 2px 1.5rem 0 rgba(0,0,0,.1);
  svg {
    width: 64px;
    g {
      transition: fill 0.3s ease-in-out;
      fill: var(--color-${({ active }) => active ? 'white' : 'black'});
    }
  }
  a {
    height: 100%;
    z-index: 1;
  }
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
      <Wrapper active={this.state.active} >
        <Link to={`/`} onClick={this.toggleActive}><InlineSVG src={Logo} /></Link>
        <nav>
          <MobileMenu active={this.state.active} toggleActive={this.toggleActive} />
          <Menu active={this.state.active} />
          <Hamburger active={this.state.active} toggleActive={this.toggleActive} />
        </nav>
      </Wrapper>
    )
  }
};

export default Header;