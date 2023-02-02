import {TextStyled} from "@/components/atoms/text/styled";
import React from "react";
import {ITextProps} from "@/components/atoms/text/types";

export const Text: React.FC<ITextProps> = (props): JSX.Element => {

    const {children, ...reset} = props;

    return (
        <TextStyled {...reset}>
            {children}
        </TextStyled>
    )
}
