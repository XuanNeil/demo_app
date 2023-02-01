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
} from "@/components/templates/home/components/diedCard/styled";
import {ArrowIcon, TroubleIcon} from "@/components/atoms/icons";
import {ITroubleCardProps} from "@/components/templates/home/components/troubleCard/types";
import {NotCovered} from "@/components/templates/home/components/notCovered";

export const TroubleCard: React.FC<ITroubleCardProps> = (props): JSX.Element => {
    const {data} = props;

    if (!data){
        return (
            <Card>
                <DiedCardStyled>
                    <LeftDiedCardStyled>
                        <TroubleIcon width={"48px"}/>
                        <TitleStyled>
                            障害状態になった時
                        </TitleStyled>
                    </LeftDiedCardStyled>
                    <RightDiedCardStyled isNotCovered>
                        <NotCovered />
                    </RightDiedCardStyled>
                </DiedCardStyled>
            </Card>
        )
    }

    return (
        <Card>
            <DiedCardStyled>
                <LeftDiedCardStyled>
                    <TroubleIcon width={"48px"}/>
                    <TitleStyled>
                        障害状態になった時
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
                </RightDiedCardStyled>
            </DiedCardStyled>
        </Card>
    )
}
