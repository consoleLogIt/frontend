import React from "react";
import { SearchbarContainerStyled, InputStyled } from "./styled";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Searchbar({ value, onChange, onKeyDown }) {
  return (
    <SearchbarContainerStyled>
      <MagnifyingGlass size={20} weight="bold" />
      <InputStyled
        onKeyDown={onKeyDown}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={"Enter user name..."}
      ></InputStyled>
    </SearchbarContainerStyled>
  );
}
