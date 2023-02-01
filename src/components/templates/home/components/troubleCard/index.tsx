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
} from "@/components/templates/home/components/troubleCard/styled";
import {ArrowIcon, TroubleIcon} from "@/components/atoms/icons";
import {ITroubleCardProps} from "@/components/templates/home/components/troubleCard/types";
import {NotCovered} from "@/components/templates/home/components/notCovered";

export const TroubleCard: React.FC<ITroubleCardProps> = (props): JSX.Element => {
    const {data} = props;

    if (!data){
        return (
            <Card>
                <CardStyled>
                    <LeftCardStyled>
                        <TroubleIcon width={"48px"}/>
                        <TitleStyled>
                            障害状態になった時
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
                    <TroubleIcon width={"48px"}/>
                    <TitleStyled>
                        障害状態になった時
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
                                障害等級2級の場合、ひと月あたり
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
