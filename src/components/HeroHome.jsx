import React from 'react';
import styled from 'styled-components';
import img from '../assets/will.jpg';
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HeroHome = () => {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroH1>Hi👋, I'm Willian</HeroH1>
        <HeroH2>
          <Fa.FaAngleLeft /> Developer <Fa.FaAngleRight />
        </HeroH2>
        <HeroText>
          I am an 18 year old Brazilian developer, Computer Science student and
          I am looking to build my career in software development, seeking to
          improve my skills. performance in programming, currently focusing on
          improving my knowledge in Java and Typescript.
        </HeroText>
        <HeroLinks>
          <HeroLink to='https://github.com/will9191' target='_blank'>
            <HeroSpan>
              <Ai.AiFillGithub />
            </HeroSpan>
          </HeroLink>
          <HeroLink to='https://www.linkedin.com/in/will9191/' target='_blank'>
            <HeroSpan>
              {' '}
              <Ai.AiOutlineLinkedin />
            </HeroSpan>
          </HeroLink>
          <HeroLink to='/contact'>
            <HeroSpan>
              {' '}
              <Ai.AiOutlineMail />
            </HeroSpan>
          </HeroLink>
        </HeroLinks>
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
  @media only screen and (max-width: 768px) {
    display: flex;
    height: fit-content;
    width: fit-content;
    flex-direction: column;
  }
`;

const HeroLeft = styled.div``;

const HeroRight = styled.div``;

const HeroH1 = styled.h1`
  text-shadow: 3px 0px white;
  font-size: 70px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const HeroH2 = styled.h2`
  display: flex;
  font-size: 40px;
  color: rgb(53, 99, 108);
  align-items: center;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const HeroImg = styled.img`
  height: 70vh;
  border-radius: 80px;
`;

const HeroText = styled.p`
  font-weight: lighter;
  word-break: normal;
  max-width: 500px;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const HeroLinks = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const HeroLink = styled(Link)`
  display: flex;
  font-size: 90px;
  padding: 20px;
`;

const HeroSpan = styled.span`
  &:hover {
    color: rgb(53, 99, 108);
    transform: scale(1.2);
    transition: 1s;
  }
`;
