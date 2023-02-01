import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(26, 55, 47, 0.8);
`;

export const ModalContentStyled = styled.div`
  background-color: #91C5B6;
  border-radius: 12px;
`;

export const ModalHeadStyled = styled.div`
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

export const ModalBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px;
  background: #91C5B6;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  gap: 12px;
  max-height: 100vh;
  overflow: auto;
`;

export const TextHeadStyled = styled.p`
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #FFFFFF;
`;
