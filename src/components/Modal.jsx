import React from 'react';
import Tools from '../app/tools.json';
import styled from 'styled-components';

const Modal = () => {
  return (
    <ModalContainer>
      {Tools &&
        Tools.map((tool) => {
          return <Card>
            {tool.name}
          </Card>;
        })}
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div``;

const Card = styled.div``
