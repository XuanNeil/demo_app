import {useCallback, useState} from "react";
import {IUseModalProps} from "@/components/molecules/modal/types";

export const useModal = (): IUseModalProps => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        isOpen,
        onOpen,
        onClose
    }
}
