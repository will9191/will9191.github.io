import React from 'react';
import { styled } from 'styled-components';
import Tools from '../app/tools.json';

const Cards = () => {

  
  return (
    <CardsContainer>
      {Tools.map((tool) => {
        return <CardImg src={tool.logo} />;
      })}
    </CardsContainer>
  );
};

export default Cards;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CardImg = styled.img`
  height: 200px;
  width: 200px;
  border: 1px solid black;
  padding: 40px;
  border-radius: 10px;
  margin: 20px;
  transition: transform 0.5s;
  background-color: #eaeaea;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  box-shadow: 0px 12px 10px 3px rgba(0, 0, 0, 0.1);
`;
