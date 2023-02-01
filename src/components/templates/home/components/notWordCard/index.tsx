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
    WrapperSubContentStyled, RightCardNotCoveredStyled,
} from "@/components/templates/home/components/notWordCard/styled";
import {ArrowIcon, NotWorkIcon} from "@/components/atoms/icons";
import {INotWorkCardProps} from "@/components/templates/home/components/notWordCard/types";
import {NotCovered} from "@/components/templates/home/components/notCovered";

export const NotWordCard: React.FC<INotWorkCardProps> = (props): JSX.Element => {
    const {data} = props;

    if (!data) {
        return (
            <Card>
                <CardStyled>
                    <LeftCardStyled>
                        <NotWorkIcon width={"48px"}/>
                        <TitleStyled>
                            働けなくなった時
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
                    <NotWorkIcon width={"48px"}/>
                    <TitleStyled>
                        働けなくなった時
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
                                ひと月あたり
                            </SubContentStyled>
                            <WrapperSubContentStyled>
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
