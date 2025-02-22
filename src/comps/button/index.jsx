import { ButtonContainerStyled } from "./styled";

export default function Button({
  onClick,
  children,
  bgColor,
  textColor,
  disabled,
}) {
  return (
    <ButtonContainerStyled
      onClick={onClick}
      textColor={textColor}
      bgColor={bgColor}
      disabled={disabled}
      
    >
      {children}
    </ButtonContainerStyled>
  );
}
