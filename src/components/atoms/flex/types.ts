import React, {CSSProperties} from "react";

export interface IFlexProps extends Omit<React.HTMLProps<HTMLDivElement>, "color" | "content" | "height" | "translate" | "width">, CSSProperties {}
