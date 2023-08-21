import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavLeft>Will<NavSpan>.</NavSpan></NavLeft>
      <NavRight>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/skills'>Skills</NavItem>
        <NavItem to='/projects'>Projects</NavItem>
        <NavItem to='/contact'>Contact</NavItem>
      </NavRight>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 30px 100px;
  align-items: center;
  font-size: 50px;
`;

const NavLeft = styled(Link)``;

const NavRight = styled.div`
  display: flex;
`;

const NavSpan = styled.span` color: #ffffff;
font-size: 70px;`

const NavItem = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  padding: 0px 50px;
  font-size: 20px;
  &:after {
    display: block;
    content: '';
    border-bottom: solid 3px rgb(53, 99, 108);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &:hover {
    color: rgb(53, 99, 108);
  }

  &.active {
    color: #fff;
  }
  &.active:hover {
    color: rgb(53, 99, 108);
  }
`;
