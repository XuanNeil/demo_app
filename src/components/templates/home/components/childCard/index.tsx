import React from "react";
import {Card} from "@/components/atoms/card";
import {
    WrapperDescriptionStyled,
    ButtonStyled,
    DescriptionStyled,
    CardStyled,
    TitleStyled,
    LeftCardStyled,
    RightCardStyled,
    SubContentStyled,
    SubContentValueStyled,
    SubContentMoneyStyled,
    BadgeListStyled,
    BadgeStyled,
    WrapperSubContentStyled,
    RightCardNotCoveredStyled,
} from "@/components/templates/home/components/childCard/styled";
import {ArrowIcon, ChildIcon} from "@/components/atoms/icons";
import {NotCovered} from "@/components/templates/home/components/notCovered";
import {IChildCardProps} from "@/components/templates/home/components/childCard/types";

export const ChildCard: React.FC<IChildCardProps> = (props): JSX.Element => {
    const {data} = props;

    if (!data){
        return (
            <Card>
                <CardStyled>
                    <LeftCardStyled>
                        <ChildIcon width={"48px"}/>
                        <TitleStyled>
                            子どもが生まれる時
                        </TitleStyled>
                    </LeftCardStyled>
                    <RightCardNotCoveredStyled>
                        <NotCovered />
                    </RightCardNotCoveredStyled>
                </CardStyled>
            </Card>
        )
    }

    return (
        <Card>
            <CardStyled>
                <LeftCardStyled>
                    <ChildIcon width={"48px"}/>
                    <TitleStyled>
                        子どもが生まれる時
                    </TitleStyled>
                </LeftCardStyled>
                <RightCardStyled>
                    <BadgeListStyled>
                        {data?.tags?.map((tag, index) => (
                            <BadgeStyled key={index}>
                                {tag}
                            </BadgeStyled>
                        ))}
                    </BadgeListStyled>
                    <DescriptionStyled>
                        <WrapperDescriptionStyled>
                            <SubContentStyled>
                                すべての合計で
                            </SubContentStyled>
                            <WrapperSubContentStyled>
                                <SubContentMoneyStyled>
                                    最大
                                </SubContentMoneyStyled>
                                <SubContentValueStyled>
                                    {data?.price}
                                </SubContentValueStyled>
                                <SubContentMoneyStyled>
                                    万円
                                </SubContentMoneyStyled>
                            </WrapperSubContentStyled>
                        </WrapperDescriptionStyled>
                        <ButtonStyled>
                            詳しくみる
                            <ArrowIcon width={"16px"}/>
                        </ButtonStyled>
                    </DescriptionStyled>
                </RightCardStyled>
            </CardStyled>
        </Card>
    )
}
