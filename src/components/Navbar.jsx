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
  padding: 50px;
  font-size: 20px;
  &.active {
    color: red;
  }
`;
