import React from "react";

interface IconProps extends React.SVGAttributes<SVGElement> {}

export const InjuryIcon = (props: IconProps) => (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="white" />
        <path d="M27 14.3346L30.3333 9.66797M27 17.0013L33 15.0013M27 19.668L29.6667 21.0013" stroke="#F2C94C" stroke-width="1.33333" stroke-linecap="round" />
        <path d="M8.559 32.8721L13.6667 39.0013H39V30.7214C39 29.3626 37.9783 28.2211 36.6278 28.0711L33 27.668H25.6667V12.3346C25.6667 10.8619 24.4728 9.66797 23 9.66797H21.6667C20.1939 9.66797 19 10.8619 19 12.3346V35.0013L12.8856 28.8869C11.8442 27.8455 10.1558 27.8455 9.11438 28.8869L8.72197 29.2793C7.74673 30.2546 7.67605 31.8126 8.559 32.8721Z" fill="#E0E0E0" />
        <rect x="19" y="13.668" width="6.66667" height="9.33333" fill="#F2C94C" />
    </svg>
)