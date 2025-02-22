import React, { useState } from "react";
import { HeaderContainerStyled, HeaderItem } from "./styled";
import { useNavigate } from "react-router-dom";

export default function Header({ options }) {
  const navigate = useNavigate();

  const handleNavigation = (option) => {
    setActive(option);
    navigate(option.to);
  };
  const [active, setActive] = useState(() => {
    const currentPath = location.pathname;
    return options.find((option) => option.to === currentPath) || options[0];
  });
  return (
    <HeaderContainerStyled>
      {options.map((d) => (
        <HeaderItem
          key={d.value}
          onClick={() => handleNavigation(d)}
          active={active.value === d.value}
        >
          {d.display}
        </HeaderItem>
      ))}
    </HeaderContainerStyled>
  );
}
