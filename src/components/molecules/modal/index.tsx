import React from "react";
import {useModal} from "@/components/molecules/modal/hooks";
import {
    ModalBodyStyled,
    ModalContentStyled,
    ModalHeadStyled,
    ModalStyled,
    TextHeadStyled
} from "@/components/molecules/modal/styled";
import {images} from "@/public/images";
import Image from "next/image";

export const Modal = (props: ReturnType<typeof useModal>) => {
    const {isOpen, onClose, children} = props;

    if (!isOpen) {
        return null;
    }

    return (
        <ModalStyled onClick={onClose}>
            <ModalContentStyled onClick={e => e.stopPropagation()}>
                <ModalBodyStyled>
                    {children}
                </ModalBodyStyled>
            </ModalContentStyled>
        </ModalStyled>
    )
}
