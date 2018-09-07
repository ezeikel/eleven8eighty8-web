import React from 'react';
import styled from 'styled-components';
import EPPhotographyLogo from '../../containers/EPPhotographyLogo/EPPhotographyLogo';

const Wrapper = styled.div`
  display: grid;
  grid-gap: var(--spacing-huge) 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: var(--spacing-gargantuan) var(--spacing-large);
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
  grid-template-rows: auto 1fr;
  grid-row-gap: var(--spacing-huge);
  @media (min-width: 768px) {
    grid-column: 2 / -1;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: var(--spacing-huge);
  }
`;

const Copy = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  display: grid;
  place-items: center;
  font-size: 32px;
  color: var(--color-black);
  p {
    margin: 0;
  }
  @media (min-width: 768px) {
    grid-row: 1 / -1;
    grid-column: ${({ direction }) => direction === 'reverse' ? ` 2 / span 1`  : `1 / span 1`};
    align-content: start;
  }
`;

const StyledExternalLink = styled.a`
  display: grid;
  place-items: center;
  padding: var(--spacing-large);
  height: 100%;
  width: 100%;
  @media (min-width: 768px) {
    padding: var(--spacing-huge);
  }
`;

const StyledEPLogo = styled(EPPhotographyLogo)`
  fill: var(--color-white);
`;

const EPPhotography = styled.div`
  grid-row: 1 / 1;
  grid-column: 1 / -1;
  display: grid;
  place-items: center;
  background-color: var(--color-ep-photography);
  color: var(--color-white);
  font-weight: bold;
  font-size: 52px;
  min-height: 300px;
  @media (min-width: 768px) {
    grid-row: 1 / span 1;
    grid-column: ${({ direction }) => direction === 'reverse' ? ` 1 / span 1`  : `2 / span 1`};    
  }
`;

const Projects = ({ className }) => (
  <Wrapper className={className}>
    <Title>Featured Projects.</Title>
    <Project>
      <EPPhotography>
        <StyledExternalLink href="https://crownd.app">
          <StyledEPLogo />
        </StyledExternalLink>
      </EPPhotography>
      <Copy>
        <p>Lorem ipsum dolor amet gentrify deep v meh health goth coloring book scenester tattooed succulents VHS banjo occupy tousled. Yuccie church-key tousled sriracha, skateboard mustache plaid microdosing disrupt drinking vinegar put a bird on it prism. Flexitarian pinterest prism waistcoat. Tbh palo santo mixtape cronut enamel pin +1. Bushwick DIY flannel drinking vinegar, tofu forage keytar edison bulb taiyaki selvage keffiyeh sriracha. PBR&B bitters shabby chic air plant lumbersexual drinking vinegar cray tote bag everyday carry. Cray +1 skateboard tousled direct trade small batch.</p>
      </Copy>
    </Project>
    <Project>
      <EPPhotography direction="reverse">
        <StyledExternalLink href="http://fiveyards.app">
          <StyledEPLogo />
        </StyledExternalLink>
      </EPPhotography>
      <Copy direction="reverse">
        <p>Lorem ipsum dolor amet gentrify deep v meh health goth coloring book scenester tattooed succulents VHS banjo occupy tousled. Yuccie church-key tousled sriracha, skateboard mustache plaid microdosing disrupt drinking vinegar put a bird on it prism. Flexitarian pinterest prism waistcoat. Tbh palo santo mixtape cronut enamel pin +1. Bushwick DIY flannel drinking vinegar, tofu forage keytar edison bulb taiyaki selvage keffiyeh sriracha. PBR&B bitters shabby chic air plant lumbersexual drinking vinegar cray tote bag everyday carry. Cray +1 skateboard tousled direct trade small batch.</p>
      </Copy>
    </Project>
    <Project>
      <EPPhotography>
        <StyledExternalLink href="http://ezeikelpemberton.com">
          <StyledEPLogo />
        </StyledExternalLink>
      </EPPhotography>
      <Copy>
        <p>Lorem ipsum dolor amet gentrify deep v meh health goth coloring book scenester tattooed succulents VHS banjo occupy tousled. Yuccie church-key tousled sriracha, skateboard mustache plaid microdosing disrupt drinking vinegar put a bird on it prism. Flexitarian pinterest prism waistcoat. Tbh palo santo mixtape cronut enamel pin +1. Bushwick DIY flannel drinking vinegar, tofu forage keytar edison bulb taiyaki selvage keffiyeh sriracha. PBR&B bitters shabby chic air plant lumbersexual drinking vinegar cray tote bag everyday carry. Cray +1 skateboard tousled direct trade small batch.</p>
      </Copy>
    </Project>
  </Wrapper>
);

export default Projects;