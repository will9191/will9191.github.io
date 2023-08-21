import React, { useState } from 'react';
import { styled } from 'styled-components';
import Tools from '../app/tools.json';

const HeroSkills = () => {
  const [popupcontent, setpopupcontent] = useState([]);
  const [popuptoggle, setpopuptoggle] = useState(false);
  const changecontent = (tool) => {
    setpopupcontent([tool]);
    setpopuptoggle(!popuptoggle);
  };

  return (
    <HeroContainer>
      <HeroH1> Click to know more about the tool!</HeroH1>
      <Cards>
        {Tools.map((tool) => {
          return (
            <CardImg src={tool.logo} onClick={() => changecontent(tool)} />
          );
        })}
      </Cards>
      {popuptoggle && (
        <PopupContainer onClick={changecontent}>
          {popupcontent.map((tool) => {
            return (
              <Popup>
                <ClosePopup onClick={changecontent}>&times;</ClosePopup>
                <PopupImg src={tool.logo} />
                <PopupText> {tool.desc}</PopupText>
              </Popup>
            );
          })}
        </PopupContainer>
      )}
    </HeroContainer>
  );
};

export default HeroSkills;

const HeroContainer = styled.section`
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1``;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CardImg = styled.img`
  height: 200px;
  width: 200px;
  border: 1px solid black;
  padding: 40px;
  border-radius: 10px;
  margin: 10px;
  transition: transform 0.5s;
  background-color: #eaeaea;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  box-shadow: 0px 12px 10px 3px rgba(0, 0, 0, 0.1);
`;

const Popup = styled.div`
  display: flex;
  text-align: center;
  position: absolute;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
`;

const ClosePopup = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  font-size: 5rem;
  color: #333;
  cursor: pointer;
  border: none;
  background: none;
`;

const PopupImg = styled.img`
  height: 300px;
  width: 300px;
`;

const PopupText = styled.p`
  font-size: 22px;
  text-align: justify;
  padding: 30px;
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
`;
