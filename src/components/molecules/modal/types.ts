import {ReactElement} from "react";

export interface IUseModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen?: () => void;
    children?: ReactElement;
}
