import React from 'react';
import { styled } from 'styled-components';
import Tools from '../app/tools.json';

const Cards = () => {
  return (
    <CardsContainer>
      {Tools &&
        Tools.map((tool) => {
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

const Card = styled.div`
  
`;

const CardImg = styled.img`
  height: 100px;
  width: 100px;
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
`;
