import styled from "styled-components";
import Home from "../Home";
import { NavbarContent } from "./NavbarContent";

const NavbarStyle = styled.div`
    margin-left: 20%;
`;

export const Navbar = (logout) => {
  return (
    <>
      <NavbarStyle id="navbar">
            <NavbarContent/>
            <Home/>
      </NavbarStyle>
    </>
  );
};
