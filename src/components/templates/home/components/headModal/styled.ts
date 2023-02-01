import styled from "styled-components";

export const HeadModalStyled = styled.div`
display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 19px;
  padding: 0 84px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0 24px;
  }
`;

export const HeadTitleStyled = styled.p`
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #FFFFFF;
`;