import React from "react";
import {ModalBodyStyled} from "@/components/atoms/modal/modalBody/styled";
import {IModalBodyProps} from "@/components/atoms/modal/modalBody/types";

export const ModalBody: React.FC<IModalBodyProps> = (props): JSX.Element => {

    const {children, ...reset} = props;

    return (
        <ModalBodyStyled {...reset}>
            {children}
        </ModalBodyStyled>
    )
}
