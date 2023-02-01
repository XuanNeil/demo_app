import React from "react";
import {useModal} from "@/components/molecules/modal/hooks";
import {ModalContentStyled, ModalStyled} from "@/components/molecules/modal/styled";

export const Modal = (props: ReturnType<typeof useModal>) => {
    const {isOpen, onClose, children} = props;

    if (!isOpen) {
        return null;
    }

    return (
        <ModalStyled onClick={onClose}>
            <ModalContentStyled onClick={e => e.stopPropagation()}>
                {children}
            </ModalContentStyled>
        </ModalStyled>
    )
}
