import React, { useState } from 'react';
import styled from 'styled-components';
import Projects from '../app/projects.json';

const HeroProjects = () => {
  return (
    <HeroContainer>
      <H1>My projects!</H1>
      <ProjectsStyle>
        {Projects?.map((project) => (
          <Project href={project.link} target='_blank'>
            <Title>{project.title}</Title>
            <SubTitle>{project.description}</SubTitle>
            <Technologies>
              {project?.technologies?.map((technology) => (
                <Technology>{technology.name}</Technology>
              ))}
            </Technologies>
          </Project>
        ))}
      </ProjectsStyle>
    </HeroContainer>
  );
};

export default HeroProjects;

const HeroContainer = styled.section`
  margin: 70px 0px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    max-width: fit-content;
  }
`;

const ProjectsStyle = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: 1fr 1fr 1fr;

  
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    max-width: fit-content;
  }
  :hover {
    transform: scale(1.05);
    transition: 1s;
  }
`;

const H1 = styled.h1`
font-size: 38px;
`;

const Project = styled.a`
  --blur: 16px;
  width: 550px;
  margin: 20px;
  overflow: hidden;
  color: #000;
  border: 1px #414141 solid;
  background-color: #d8d8d8;
  padding: 20px;
  border-radius: 50px;
  transform: translateZ(0);
  @media only screen and (max-width: 768px) {
   width: 100%;
    grid-template-columns: 1fr;
    max-width: fit-content;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
`;

const SubTitle = styled.h5`
  text-align: center;
  font-size: 18px;
`;

const Technologies = styled.div`
  display: flex;
  justify-content: center;
  
`;

const Technology = styled.div`
  background-color: rgb(53, 99, 108);
  border-radius: 20px;
  padding: 8px;
  margin: 10px 3px;
  color: #ffffff;
`;
