import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(var(--translate-to));
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;
const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  --translate-from: 100%;
  --translate-to: 0%;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;
