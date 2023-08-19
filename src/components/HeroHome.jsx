import React from 'react';
import styled from 'styled-components';
import img from '../assets/photo.jpg';

const HeroHome = () => {
  return (
    <HeroContainer id='home'>
      <HeroLeft>
        <HeroH1>Hi👋, I'm Willian</HeroH1>
        <HeroH2>Web Developer</HeroH2>
        <HeroText>
          I'm a brazilian 17 year old programmer, student at ETEC school and I'm
          pursuing a career in the web developer business, looking to improve my
          programming performance, currently focusing on improving my knowledge
          in ReactJs.
        </HeroText>
      </HeroLeft>
      <HeroRight>
        <HeroImg src={img} />
      </HeroRight>
    </HeroContainer>
  );
};

export default HeroHome;

const HeroContainer = styled.section`
  height: 100vh;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`;

const HeroLeft = styled.div``;

const HeroRight = styled.div``;

const HeroH2 = styled.h2`
  font-size: 40px;
`;

const HeroH1 = styled.h1`
  text-shadow: 1px 0px blue;
  font-size: 70px;
`;

const HeroImg = styled.img`
  height: 70vh;
`;

const HeroP = styled.p`
  font-size: 20px;
`;

const HeroText = styled.p`
max-width: 500px;
font-size: 20px;
`;