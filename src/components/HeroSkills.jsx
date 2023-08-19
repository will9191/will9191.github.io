import React from 'react';
import Cards from './Cards';
import { styled } from 'styled-components';

const HeroSkills = () => {
  return (
    <HeroContainer id='skills'>
      <Cards />
    </HeroContainer>
  );
};

export default HeroSkills;

const HeroContainer = styled.section`
  height: 100vh;
`;
