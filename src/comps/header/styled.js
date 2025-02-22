import styled from "styled-components";

export const HeaderContainerStyled = styled.div`
  padding: 0 2rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 4rem;
  justify-content: end;
  font-size: 1.5rem;

`;

export const HeaderItem = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  border-bottom: 4px solid
    ${({ active }) => (active ? "#023020" : "transparent")};
`;
