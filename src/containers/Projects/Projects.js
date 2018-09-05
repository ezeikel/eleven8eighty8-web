import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-gap: var(--spacing-large) 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 0 var(--spacing-large);
    min-height: 100vh;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  line-height: 1;
  color: var(--color-secondary);
  @media (min-width: 768px) {
    writing-mode: vertical-rl;
    font-size: 72px;
    grid-column: 1 / span 1;
    grid-row: 1 / -1;
  }
`;

const Project = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 350px);
  @media (min-width: 768px) {
    grid-column: 2 / -1;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

const Copy = styled.div`
  display: grid;
  place-items: center;
  padding: var(--spacing-large);
  font-size: 32px;
  @media (min-width: 768px) {
    grid-column: ${({ direction }) => direction === 'reverse' ? ` 2 / span 1`  : `1 / span 1`};
    padding: var(--spacing-huge);
  }
`;

const Image = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--color-bittersweet);
  color: var(--color-white);
  font-weight: bold;
  font-size: 52px;
  @media (min-width: 768px) {
    grid-row: 1 / -1;
    grid-column: ${({ direction }) => direction === 'reverse' ? ` 1 / span 1`  : `2 / span 1`};    
  }
`;

const Projects = ({ className }) => (
  <Wrapper className={className}>
    <Title>Featured Projects.</Title>
    <Project>
      <Copy>
        We are a team of photographers based in London, UK who specialise in documenting those moments that will live on in the memory for a lifetime.
      </Copy>
      <Image>
        Crownd
      </Image>
    </Project>
    <Project>
      <Copy direction="reverse">
        We are a team of photographers based in London, UK who specialise in documenting those moments that will live on in the memory for a lifetime.
      </Copy>
      <Image direction="reverse">
        5 Yards
      </Image>
    </Project>
    <Project>
      <Copy>
        We are a team of photographers based in London, UK who specialise in documenting those moments that will live on in the memory for a lifetime.
      </Copy>
      <Image>
        EP Photography
      </Image>
    </Project>
  </Wrapper>
);

export default Projects;