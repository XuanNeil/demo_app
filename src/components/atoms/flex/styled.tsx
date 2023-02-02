import styled from 'styled-components'
import {IFlexProps} from "@/components/atoms/flex/types";
import React from "react";

const Box: React.FunctionComponent<IFlexProps> = (props) => <div className={props.className}>{props.children}</div>;

export const FlexStyled = styled.div`
  display: flex;
`;
