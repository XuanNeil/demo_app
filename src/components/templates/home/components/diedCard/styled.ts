import styled from "styled-components";
import {breakpoint} from "@/components/contants/breakpoint";

export const DiedCardStyled = styled.div`
  display: flex;
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    background-color: aliceblue;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftDiedCardStyled = styled.div`
  display: flex;
  background: #EDF9F5;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  gap: 12px;
  min-width: 315px;
  padding: 27px 0 27px 16px;
  align-items: center;
`;

export const TitleStyled = styled.p`
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #262E2C;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
  white-space: pre-wrap;
  word-break: break-word;
`;

export const RightDiedCardStyled = styled.div`
  background: #FFFFFF;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  gap: 12px;
  flex: 2;
  padding: 16px ;
`;

export const RightDiedCardNotCoveredStyled = styled.div`
  background: #91B3A9;
  box-shadow: 2px 4px 10px rgba(30, 38, 46, 0.08);
  gap: 12px;
  flex: 2;
  padding: 12.5px 16px ;
  border-radius: 0 12px 12px 0;
`;
export const BadgeListStyled = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const BadgeStyled = styled.p`
  padding: 6px 10px;
  background: #FFF6E3;
  border-radius: 27px;
  font-family: 'Hiragino Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #BA8620;
`;

export const DescriptionStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
  gap: 17px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const WrapperDescriptionStyled = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
`;

export const SubContentStyled = styled.span`
  font-family: 'Hiragino Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  color: #3B4341;
`;

export const WrapperSubContentStyled = styled.span`
  display: flex;
`;

export const SubContentValueStyled = styled.span`
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
  color: #BA8620;
`;

export const SubContentMoneyStyled = styled.span`
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #BA8620;
  margin-top: 12px;
`;

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #D8BA81 0%, #AB8F5A 100%);
  border: 1px solid #C5B391;
  border-radius: 24px;
  font-family: 'Zen Maru Gothic';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #FFFFFF;
  height: 32px;
  gap: 12px;
  padding: 8px 14px 8px 16px;
  @media (max-width: 1024px) {
    width: fit-content;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
