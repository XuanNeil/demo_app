import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Text = styled.p`
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #FFFFFF;
`;

export const Flex = styled.div`
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

export const Button = styled.button`
  border: 1px solid #C5B391;
  border-radius: 24px;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  background: linear-gradient(180deg, #D8BA81 0%, #AB8F5A 100%);
  padding: 8px 16px;
`;
