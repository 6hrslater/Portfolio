import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMessage } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" />
          <span>Darian</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/6hrslater">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/dchen1999/">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="/">
        <AiFillMessage size="3rem"></AiFillMessage>
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
