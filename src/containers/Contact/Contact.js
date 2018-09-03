import React from 'react';
import styled from 'styled-components';
import ContactForm from '../ContactForm/ContactForm';

const Wrapper = styled.div `
  display: grid;
  grid-row-gap: var(--spacing-large);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: var(--spacing-huge);
  }
`;

const Title = styled.h2 `
  font-size: 42px;
  line-height: 1;
  text-align: center;
  color: var(--color-secondary);
  @media (min-width: 768px) {
    font-size: 48px;
    grid-column: 1 / span 1;
    text-align: left;
  }
`;

const Copy = styled.div `
  p {
    color: var(--color-black);
    font-size: 24px;
    font-weight: 300;
    margin: 0;
    a {
      color: var(--color-radical-red);
    }
  }
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const StyledContactForm = styled(ContactForm)`
  @media (min-width: 768px) {
    grid-column: 3 / -1;
  }
`;

const Contact = ({ className }) => (
  <Wrapper className={className} id="contact">
    <Title>Holla.</Title>
    <Copy>
      <p>
        Great idea for the next big thing? Let us help you bring it to life. Send us a quick message and we'll get back to you as soon as we can. The more detail the better, but if you're still not 100% sure on all the specifics, thats fine too. Alternatively you can shoot us an email at <a href="mailto:info@eleven8eighty8.com">info@eleven8eighty8.com</a>.
      </p>
    </Copy>
    <StyledContactForm />
  </Wrapper>
);

export default Contact;