import React from "react";
import Image from "next/image";
import {images} from "@/public/images";
import {HeadModalStyled, HeadTitleStyled} from "@/components/templates/home/components/headModal/styled";

export const HeadModal: React.FC = (): JSX.Element => {

    return (
        <HeadModalStyled>
            <Image src={images.leftPublicInsurance} alt={"left public insurance"} height={'110'} width={"132"}/>
            <HeadTitleStyled>
                あなたが公的保険で受け取れる金額
            </HeadTitleStyled>
            <Image src={images.rightPublicInsurance} alt={"right public insurance"} height={'110'} width={"132"}/>
        </HeadModalStyled>
    )
}