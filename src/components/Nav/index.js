import React from "react";
import { useLocation } from "react-router-dom";

import { Nav, Brand, Menu, MenuItem } from "./styled";

export default ({ mode, setMode }) => {
  const menuItens = [
    { id: 1, text: "Random", to: "/random" },
    { id: 2, text: "Filter", to: "/filter" }
  ];

  const location = useLocation();

  const isActive = item => item.to === location.pathname;

  return (
    <Nav>
      <Brand>ReactiveMeal</Brand>
      <Menu>
        {menuItens.map(item => (
          <MenuItem to={item.to} active={isActive(item)}>
            {item.text}
          </MenuItem>
          // <MenuItem
          //   key={item.id}
          //   active={isActive(item)}
          //   onClick={handleClick}
          //   data-mode={item.mode}
          // >
          //   {item.text}
          // </MenuItem>
        ))}
      </Menu>
    </Nav>
  );
};
