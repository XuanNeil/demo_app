import React, {useMemo} from "react";
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
import {IInJuryCardProps} from "@/components/templates/home/components/injuryCard/types";
import {ArrowIcon, InjuryIcon} from "@/components/atoms/icons";
import {NotCovered} from "@/components/templates/home/components/notCovered";

export const InJuryCard: React.FC<IInJuryCardProps> = (props): JSX.Element => {
    const {data} = props;

    if (!data){
        return (
            <Card>
                <DiedCardStyled>
                    <LeftDiedCardStyled>
                        <InjuryIcon width={"48px"}/>
                        <TitleStyled>
                            病気やケガで <br/>
                            医療費が高額になった時
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
                    <InjuryIcon width={"48px"}/>
                    <TitleStyled>
                        病気やケガで <br/>
                        医療費が高額になった時
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
                                ひと月あたり自己負担上限額
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
