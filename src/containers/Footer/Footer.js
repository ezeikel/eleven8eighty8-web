import React from 'react';
import styled from 'styled-components';
import LogoShort from '../../containers/LogoShort/LogoShort';

const Wrapper = styled.footer`
  display: grid;
  grid-template-rows: 80px auto 1fr;
  place-items: center;
  grid-row-gap: var(--spacing-large);
  padding: var(--spacing-large);
  background-color: var(--color-black);
  span {
    color: var(--color-white);
    span span {
      color: var(--color-red);
    }
  }
  @media (min-width: 768px) {
    grid-row-gap: var(--spacing-huge);
    padding: var(--spacing-huge);
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: var(--spacing-medium);
  }
`;

const Copy = styled.span`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  a,
  a:link,
  a:active,
  a:visited,
  a:focus {
    color: var(--color-white);
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    grid-row: 2 / -1;
    align-self: end;
  }
`;

const StyledLogo = styled(LogoShort)`
  .logo {
    fill: var(--color-white);
  }
  display: block;
  height: 60px;
  @media (min-width: 768px) {
    grid-row: 1 / -1;
    grid-column: 1 / span 1;
  }
`;

const SocialLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  width: 100%;
  margin: 0;
  a {
    color: var(--color-white);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 80px);
    width: auto;
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
    align-self: end;
  }
`;

const Footer = () => (
  <Wrapper>
    <StyledLogo />
    <SocialLinks>
      <li>
        <a href="https://twitter.com/eleven8eighty8"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="https://instagram.com/eleven8eighty8"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="https://facebook.com/eleven8eighty8"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
      </li>
      <li>
        <a href="https://linkedin.com/eleven8eighty8"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
      </li>
    </SocialLinks>
    <Copy>
      <span>All rights reserved &copy; {new Date().getFullYear()}. Eleven 8Eighty8</span>
      <span>Made with <span>♡</span> in South London.</span>
    </Copy>
  </Wrapper>


);

export default Footer;