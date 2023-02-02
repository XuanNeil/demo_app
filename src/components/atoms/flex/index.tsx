import {FlexStyled} from "@/components/atoms/flex/styled";
import React from "react";
import {IFlexProps} from "@/components/atoms/flex/types";

export const Flex: React.FC<IFlexProps> = (props): JSX.Element => {
    console.log(props, props.className)
    const {children, style} = props;

    return (
        <FlexStyled style={props}>
            {children}
        </FlexStyled>
    )
};
