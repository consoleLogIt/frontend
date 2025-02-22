import styled from "styled-components";
export const WrapperStyled = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const HistoryContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
 align-items: center;
`;




export const HistoryItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  font-size:2rem;
  gap: 10rem;
  padding: 1rem 2rem;
  width: 100%;

`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(249 249 249);
  width: 100%;
 
  border: 1px solid #e5e5e5;
  padding: 1rem 2rem;
  gap: 10rem;
  span{
    font-size: 1.5rem;
  }
`;
