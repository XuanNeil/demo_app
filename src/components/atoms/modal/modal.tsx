import React from "react";
import {useDisclosure} from "@/components/atoms/modal/hooks";
import {ModalStyled} from "@/components/atoms/modal/styled";

export const Modal = (props: ReturnType<typeof useDisclosure>) => {
    const {isOpen, onClose, children} = props;

    if (!isOpen) {
        return null;
    }

    return (
        <ModalStyled onClick={onClose}>
            {children}
        </ModalStyled>
    )
}
