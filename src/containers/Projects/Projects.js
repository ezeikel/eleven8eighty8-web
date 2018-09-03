import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-gap: var(--spacing-large) 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 var(--spacing-large);
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
  }
`;

const ProjectsWrapper = styled.section`
  grid-column: 2 / -1;
  display: grid;
  grid-template-rows: repeat(3, 300px);
  grid-gap: var(--spacing-large) 0;
  div {
    background-color: var(--color-bittersweet);
    display: grid;
    place-items: center;
    color: var(--color-white);
    font-size: 28px;

  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 0 var(--spacing-large);
  }
`;

const Projects = ({ className }) => (
  <Wrapper className={className}>
    <Title>Projects.</Title>
    <ProjectsWrapper>
      <div>Crownd</div>
      <div>5 Yards</div>
      <div>EP Photography</div>
    </ProjectsWrapper>
  </Wrapper>
);

export default Projects;