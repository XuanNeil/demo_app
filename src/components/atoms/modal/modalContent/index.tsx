import React from "react";
import {IModalContentProps} from "@/components/atoms/modal/modalContent/types";
import {ModalContentStyled} from "@/components/atoms/modal/modalContent/styled";

export const ModalContent: React.FC<IModalContentProps> = (props): JSX.Element => {

    const {children, ...rest} = props

    return (
        <ModalContentStyled {...rest} onClick={(e) => e.stopPropagation()}>
            {children}
        </ModalContentStyled>
    )
}
