import React from 'react';
import Cards from './Cards';
import { styled } from 'styled-components';

const HeroSkills = () => {
  return (
    <HeroContainer>
      <Cards />
    </HeroContainer>
  );
};

export default HeroSkills;

const HeroContainer = styled.section`
  height: 100vh;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`;
