import React from 'react';
import styled from 'styled-components';

const HeroContact = () => {
  return (
    <HeroContainer>
      <HeroForm
        target='_blank'
        action='https://formsubmit.co/willian.contato91@gmail.com'
        method='POST'
      >
        <HeroH1>Get in touch!</HeroH1>
        <HeroInput type='text' name='name' placeholder='Full Name' required />
        <HeroInput
          type='email'
          name='email'
          placeholder='Email Address'
          required
        />
        <HeroTexArea
          placeholder='Your Message'
          name='message'
          rows='10'
          required
        />
        <HeroBtn type='submit' class='btn'>
          Submit Form
        </HeroBtn>
      </HeroForm>
    </HeroContainer>
  );
};

export default HeroContact;

const HeroContainer = styled.section`
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: fit-content;
    width: fit-content;
    flex-direction: column;
}
`;

const HeroForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vh;
  text-align: center;
`;

const HeroH1 = styled.h1``;

const HeroInput = styled.input`
  border: none;
  border-bottom: 3px solid rgb(53, 99, 108);
  outline: 0;
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  background: transparent;
  resize: none;
  &:focus {
    background-color: rgba(255, 255, 255, 0.518);
    transition: 0.5s;
    border-radius: 20px;
  }
`;

const HeroTexArea = styled.textarea`
  border: none;
  border-bottom: 3px solid rgb(53, 99, 108);
  outline: 0;
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  background: transparent;
  resize: none;
`;

const HeroBtn = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 50px;
  background-color: rgb(53, 99, 108);
  padding: 20px;
`;
