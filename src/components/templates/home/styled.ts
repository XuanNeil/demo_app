import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const BodyModalStyled = styled.div`
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
