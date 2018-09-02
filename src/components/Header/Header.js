import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from '../../containers/Hamburger/Hamburger';
import MobileMenu from '../../containers/MobileMenu/MobileMenu';
import Menu from '../../containers/Menu/Menu';
import LogoShort from '../../containers/LogoShort/LogoShort';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  position: relative;
  padding: var(--spacing-medium) var(--spacing-large);
  background-color: var(--color-white);
  box-shadow: 0 2px 1.5rem 0 rgba(0,0,0,.1);
  svg {
    width: 64px;
    g {
      transition: fill 0.3s ease-in-out;
      fill: var(--color-${({ active }) => active ? 'white' : 'black'});
    }
  }
  a {
    max-height: var(--header-height);
    height: 100%;
    z-index: 1;
  }
`;

const StyledLink = styled(Link)`
  display: grid;
  place-items: center;
`;

class Header extends Component {
  state = {
    active: false
  }

  toggleActive = () => {
    const action = !this.state.active ? 'add' : 'remove';
    document.body.classList[action]('no-scroll');

    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <Wrapper active={this.state.active} >
        <StyledLink to={`/`} onClick={this.state.active ? this.toggleActive : null}><LogoShort /></StyledLink>
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