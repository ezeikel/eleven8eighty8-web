import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SocialLinks from '../SocialLinks/SocialLinks';

const Wrapper = styled.footer `
  display: grid;
  grid-template-rows: 54px auto auto;
  padding: var(--spacing-medium);
  background-color: #000;
  color: #666;
  padding-top: var(--spacing-large);
  padding-bottom: var(--spacing-large);
  padding: var(--spacing-large);
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  a, a:link, a:visited, a:active {
    color: #666;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    li {
      padding: 0 8px 0 10px;
    }
    li + li {
      border-left: 1px solid #666;
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <SocialLinks />
    <p>&copy; {new Date().getFullYear()} Eleven 8Eighty8. All Rights Reserved.</p>
    <ul>
      <li><Link to={`/privacy-policy`}>Privacy Policy</Link></li>
      <li><Link to={`/terms-of-use`}>Terms of Use</Link></li>
      <li><Link to={`/rss-feed`}>RSS Feed</Link></li>
    </ul>
  </Wrapper>
);

export default Footer;