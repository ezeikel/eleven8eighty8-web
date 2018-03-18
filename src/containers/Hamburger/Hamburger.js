import React from 'react';

import styled from 'styled-components';


const Wrapper = styled.div`
  cursor: pointer;
  > span {
    display: block;
    margin-top: var(--spacing-tiny);
    margin-bottom: var(--spacing-tiny);
    margin-right: auto;
    margin-left: auto;
    width: 25px;
    height: 2px;
    background-color: var(--color-black);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  &.is-active {
    > span:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
      background-color: var(--color-black);
    }
    > span:nth-child(2) {
      opacity: 0;
    }
    > span:nth-child(3) {
      transform: translateY(-6px) rotate(-45deg);
      background-color: var(--color-black);
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Hamburger = (props) => (
  <Wrapper className={props.active} onClick={props.toggleActive}>
    <span className="line"></span>
    <span className="line"></span>
    <span className="line"></span>
  </Wrapper>
);

export default Hamburger;