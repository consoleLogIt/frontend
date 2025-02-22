import styled from "styled-components";

export const CardContainerStyled = styled.div`
  border-radius: 5px;
  padding: 1rem 2rem;
  display: flex;
  gap: 4rem;
  width: 100%;
  cursor: pointer;

  border: ${({ noBorder }) => (noBorder ? "" : "1px solid #e0e0e0")};
`;

export const CardImageContainerStyled = styled.div`
  width: 10rem;
  height: auto;
`;

export const CardSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2rem;
`;
