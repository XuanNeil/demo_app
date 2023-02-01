import React from "react";
import {CardStyled} from "@/components/atoms/card/styled";
import {ICardProps} from "@/components/atoms/card/types";

export const Card: React.FC<ICardProps> = (props): JSX.Element => {
    const {children, ...rest} =  props;

    return (
        <CardStyled {...rest}>
            {children}
        </CardStyled>
    )
}
