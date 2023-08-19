import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavItem to='/'>Home</NavItem>
      <NavItem to='/skills'>Skills</NavItem>
      <NavItem to='/contact'>Contact</NavItem>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  background-color: transparent;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  padding: 0px 50px;
  font-size: 20px;
  &:after {
    display: block;
    content: '';
    border-bottom: solid 3px #00425e;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &.active {
    color: #00425e;
  }
`;
