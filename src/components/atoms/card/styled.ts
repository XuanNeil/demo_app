import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 1024px) {
    background-color: aliceblue;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
