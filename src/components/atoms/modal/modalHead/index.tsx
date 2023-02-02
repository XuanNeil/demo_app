import React from "react";
import {ModalHeadStyled} from "@/components/atoms/modal/modalHead/styled";
import {IModalHeadProps} from "@/components/atoms/modal/modalHead/types";

export const ModalHead: React.FC<IModalHeadProps> = (props): JSX.Element => {

    const {children, ...rest} = props;

    return (
        <ModalHeadStyled {...rest}>
            {children}
        </ModalHeadStyled>
    )
}
