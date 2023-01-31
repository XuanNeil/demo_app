import React from "react";

interface IconProps extends React.SVGAttributes<SVGElement> {
}

export const ChildIcon = (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="white" />
        <rect width="32" height="32" transform="translate(8 8)" fill="white" />
        <rect x="12" y="8" width="16" height="32" rx="8" fill="#E0E0E0" />
        <circle cx="20.0001" cy="14.6673" r="5.33333" fill="white" />
        <circle cx="17.9999" cy="14.0007" r="0.666667" fill="#E0E0E0" />
        <circle cx="21.9999" cy="14.0007" r="0.666667" fill="#E0E0E0" />
        <path d="M12 26.6673L28 21.334V25.334L12 30.6673V26.6673Z" fill="#F2C94C" />
        <path d="M30.6667 19.9993L34.0001 24.666M30.6667 17.3327L36.6667 19.3327M30.6667 14.666L36.0001 10.666" stroke="#F2C94C" stroke-width="1.33333" stroke-linecap="round" />
        <circle cx="20.0001" cy="17.3333" r="0.666667" stroke="#E0E0E0" stroke-width="1.33333" />
    </svg>
)

