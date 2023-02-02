import {useCallback, useState} from "react";
import {IUseDisclosureProps} from "@/components/atoms/modal/types";

export const useDisclosure = (): IUseDisclosureProps => {
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
