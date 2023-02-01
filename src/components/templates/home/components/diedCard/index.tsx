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
    WrapperSubContentStyled,
    RightDiedCardNotCoveredStyled,
} from "@/components/templates/home/components/diedCard/styled";
import {ArrowIcon, DiedIcon} from "@/components/atoms/icons";
import {IDiedCardProps} from "@/components/templates/home/components/diedCard/types";
import {NotCovered} from "@/components/templates/home/components/notCovered";

export const DiedCard: React.FC<IDiedCardProps> = (props): JSX.Element => {
    const {data} = props;

    if (!data){
        return (
            <Card>
                <DiedCardStyled>
                    <LeftDiedCardStyled>
                        <DiedIcon width={"48px"}/>
                        <TitleStyled>
                            亡くなった時
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
                    <DiedIcon width={"48px"}/>
                    <TitleStyled>
                        亡くなった時
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
