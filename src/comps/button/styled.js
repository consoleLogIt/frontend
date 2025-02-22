import styled, { css } from "styled-components";

export const ButtonContainerStyled = styled.button`
  padding: 0.7rem 2rem;
  font-size: 1.5rem;
  outline: none;
  border: none;
  background-color: rgb(56 184 150);
  color: white;
  width: 100%;
  max-width: 25rem;
  text-align: center;

  border-radius: 4px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #00000066;
      pointer-events: none;
    `}
  &:hover {
    opacity: 0.5;
  }
`;
