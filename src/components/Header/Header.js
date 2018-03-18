import React, { Component } from 'react';

import styled from 'styled-components';
import Hamburger from '../../containers/Hamburger/Hamburger';


const Wrapper = styled.header`
  display: grid;
  justify-items: center;
  position: relative;
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
        <Hamburger active={this.state.active ? 'is-active' : null} toggleActive={this.toggleActive}/>
      </Wrapper>
    )
  }
};

export default Header;