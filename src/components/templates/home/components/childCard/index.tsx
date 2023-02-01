import React from "react";
import {Card} from "@/components/atoms/card";
import {
    WrapperDescriptionStyled,
    ButtonStyled,
    DescriptionStyled,
    DiedCardStyled,
    TitleStyled,
    LeftDiedCardStyled,
    RightDiedCardStyled,
    SubContentStyled,
    SubContentValueStyled,
    SubContentMoneyStyled,
    BadgeListStyled,
    BadgeStyled,
    WrapperSubContentStyled, RightDiedCardNotCoveredStyled,
} from "@/components/templates/home/components/diedCard/styled";
import {ArrowIcon, ChildIcon} from "@/components/atoms/icons";
import {NotCovered} from "@/components/templates/home/components/notCovered";
import {IChildCardProps} from "@/components/templates/home/components/childCard/types";

export const ChildCard: React.FC<IChildCardProps> = (props): JSX.Element => {
    const {data} = props;

    if (!data){
        return (
            <Card>
                <DiedCardStyled>
                    <LeftDiedCardStyled>
                        <ChildIcon width={"48px"}/>
                        <TitleStyled>
                            子どもが生まれる時
                        </TitleStyled>
                    </LeftDiedCardStyled>
                    <RightDiedCardNotCoveredStyled>
                        <NotCovered />
                    </RightDiedCardNotCoveredStyled>
                </DiedCardStyled>
            </Card>
        )
    }

    return (
        <Card>
            <DiedCardStyled>
                <LeftDiedCardStyled>
                    <ChildIcon width={"48px"}/>
                    <TitleStyled>
                        子どもが生まれる時
                    </TitleStyled>
                </LeftDiedCardStyled>
                <RightDiedCardStyled>
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
                </RightDiedCardStyled>
            </DiedCardStyled>
        </Card>
    )
}
