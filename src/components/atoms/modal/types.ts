import {ReactElement} from "react";

export interface IUseDisclosureProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen?: () => void;
    children?: ReactElement;
}
