import React from "react";
import {ButtonStyled} from "@/components/atoms/button/styled";
import {IButtonProps} from "@/components/atoms/button/types";

export const Button: React.FC<IButtonProps> = (props): JSX.Element => {
    const {children, ...rest} =  props;

    return (
        <ButtonStyled {...rest}>
            {children}
        </ButtonStyled>
    )
}
