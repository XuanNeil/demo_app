import React from "react";

interface IconProps extends React.SVGAttributes<SVGElement> {
}

export const ArrowIcon = (props: IconProps) => (
    <svg viewBox="0 0 19 6" fill="none" {...props}>
        <path d="M1 5H17L13.2205 1" stroke="white" stroke-linecap="round" />
    </svg>
)