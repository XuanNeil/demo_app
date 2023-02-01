import React from "react";
import {
    WrapperTitleStyled,
    TitleStyled,
    ContentStyled,
} from "@/components/templates/home/components/notCovered/styled";
import {ExclamationCircleIcon} from "@/components/atoms/icons";

export const NotCovered: React.FC = (): JSX.Element => {

    return (
        <>
            <WrapperTitleStyled>
                <ExclamationCircleIcon height={'20px'} />
                <TitleStyled>
                    保障の対象外です
                </TitleStyled>
            </WrapperTitleStyled>
            <ContentStyled>
                入力内容と本シミュレーションの算出条件を考慮すると、対象外の可能性が高いです。<br/>
                ご家族の詳細情報やお住いの市区町村などの条件により、対象になる場合もあります。<br/>
                より正確な情報は、日本年金機構や加入している協会けんぽ又は健康保険組合等でご確認下さい。
            </ContentStyled>
        </>
    )
}
