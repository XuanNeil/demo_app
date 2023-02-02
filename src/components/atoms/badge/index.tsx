import React from "react";
import {IBadgeProps} from "@/components/atoms/badge/types";
import {BadgeStyled} from "@/components/atoms/badge/styled";

export const Badge: React.FC<IBadgeProps> = (props): JSX.Element => {
    const {children, ...rest} =  props;

    return (
        <BadgeStyled {...rest}>
            {children}
        </BadgeStyled>
    )
}
