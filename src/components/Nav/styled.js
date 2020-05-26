import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 60px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: sticky;
  top: 0;
  right: 0;
`;

export const Brand = styled.span`
  display: block-inline;
  margin-right: auto;
  font-size: 1.5em;
  font-weight: bold;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  align-items: center;
`;

export const MenuItem = styled(Link)`
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  padding: 0 10px;
  font-weight: ${props => (!!props.active ? "bold" : "normal")};
  background-color: ${props => (!!props.active ? "white" : "black")};
  color: ${props => (!!props.active ? "black" : "white")};
  display: flex;
  align-items: center;
  transition: all 0.2s;
`;
