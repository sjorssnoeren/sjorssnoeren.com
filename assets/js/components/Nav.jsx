import React from 'react';
import styled from 'styled-components';

const NavList = styled.ul`
  display: inline-block;
  float: right;
  white-space: nowrap;
`;

const NavItem = styled.li`
  display: inline-block;
  font-size: 20px;
  line-height: 1.2;
  margin-left: 50px;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const Nav = (props) => {
  return (
    <nav>
      <NavList style={{ padding: props.padding || '54px 0' }}>
        {props.links.map((link) => {
          return (<NavItem key={link.title}><a href={link.href}>{link.title}</a></NavItem>);
        })}
      </NavList>
    </nav>
  );
};

export default Nav;
