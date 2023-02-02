import {ReactNode} from "react";

export interface ICoveredCardProps {
    data?: {
        left: {
            icon: ReactNode,
            title: string
        },
        right?: {
            description: string;
            tags?: string[];
            price?: number;
        }
    }
}
