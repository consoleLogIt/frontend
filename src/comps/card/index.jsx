import React from "react";
import {
  CardContainerStyled,
  CardImageContainerStyled,
  CardSectionStyled,
} from "./styled";

export default function Card({ name, image, noBorder, linkTo }) {
  const handleClick = () => {
    if (linkTo) {
      window.open(linkTo, "_blank");
    }
  };

  return (
    <CardContainerStyled onClick={handleClick} noBorder={noBorder}>
      <CardSectionStyled>
        <span style={{ color: "rgb(185 187 202)" }}>User Image</span>
        <CardImageContainerStyled>
          <img style={{ width: "inherit" }} src={image} alt="User Image" />
        </CardImageContainerStyled>
      </CardSectionStyled>
      <CardSectionStyled>
        <span style={{ color: "rgb(185 187 202)" }}>Github User Name </span>
        <b>{name}</b>
      </CardSectionStyled>
    </CardContainerStyled>
  );
}
