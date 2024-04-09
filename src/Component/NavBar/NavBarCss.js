import { Link } from "react-scroll";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: black;
  display: flex;
  width: 100%;
  height: 6vh;
  background-color: #f8e8ee;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  margin-right: 50px;
  text-decoration: none;
  color: #a40052;
  font-family: "Dosis", sans-serif;
  font-size: 25px;
`;

export const NavbarLogoLink = styled(Link)`
  margin-left: 50px;
  text-decoration: none;
  color: #a40052;
  font-family: "Great Vibes", cursive;
  font-size: 30px;
`;
