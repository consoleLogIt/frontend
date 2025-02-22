import React, { useState } from "react";
import { HeaderContainerStyled, HeaderItem } from "./styled";
import { useNavigate } from "react-router-dom";

export default function Header({ options }) {
  const navigate = useNavigate();

  const handleNavigation = (option) => {
    setActive(option);
    navigate(option.to);
  };

  // get the current selected from the url.
  const [active, setActive] = useState(() => {
    const currentPath = location.pathname;
    return options.find((option) => option.to === currentPath);
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
