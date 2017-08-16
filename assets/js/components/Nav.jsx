import React from 'react';
import styled from 'styled-components';

import { Link } from './Typography.jsx';

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

    &:after {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const Nav = (props) => {
  return (
    <nav>
      <NavList style={{ padding: props.padding || '54px 0' }}>
        {props.links.map((link) => {
          return (<NavItem key={link.title}><Link href={link.href}>{link.title}</Link></NavItem>);
        })}
      </NavList>
    </nav>
  );
};

export default Nav;
