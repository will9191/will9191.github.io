import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import guess from '../assets/guess.png';
import modal from '../assets/modal.png';
import corona from '../assets/corona.png';

const HeroProjects = () => {
  return (
    <HeroContainer>
      <Projects>
        <Project to='https://github.com/will9191/guessMyNumber' target='_blank'>
          <Img src={guess} />
          <CardFooter>
            <Title>Guess my Number!</Title>
            <SubTitle>
              Game using JavaScript to guess a number between 1 and 20
            </SubTitle>
          </CardFooter>
        </Project>

        <Project to='https://github.com/will9191/modalWindow' target='_blank'>
          <Img src={modal} />
          <CardFooter>
            <Title>Modal Window</Title>
            <SubTitle>
              Project using JavaScript to create animations when opening and
              closing windows with content
            </SubTitle>
          </CardFooter>
        </Project>

        <Project
          to='https://github.com/will9191/WorldCoronavirustest-main'
          target='_blank'
        >
          <Img src={corona} />
          <CardFooter>
            <Title>World Corona Virus</Title>
            <SubTitle>
              Project developed using JavaScript to graphically display
              information about COVID-19 around the world and Brazil.
            </SubTitle>
          </CardFooter>
        </Project>
      </Projects>
    </HeroContainer>
  );
};

export default HeroProjects;

const HeroContainer = styled.section`
  height: 100vh;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`;

const Projects = styled.div`
  display: flex;
  max-width: 100%;
`;

const Project = styled(Link)`
  display: flex;
  --blur: 16px;
  width: 550px;
  margin: 20px;
  overflow: hidden;
  color: #000;
  transform: translateZ(0);

`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(calc(1 + (var(--hover, 0) * 0.25)))
    rotate(calc(var(--hover, 0) * -5deg));
  transition: transform 0.2s;
`;

const Title = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h5`
  text-align: center;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: red;
  display: grid;
  grid-template-rows: auto auto;
  gap: 0.5ch;
  background: hsl(0 0% 100% / 0.5);
  backdrop-filter: blur(var(--blur));
  height: 30%;
  align-content: center;
`;
