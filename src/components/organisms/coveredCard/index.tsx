import React from "react";
import {
    WrapperDescriptionStyled,
    ButtonStyled,
    DescriptionStyled,
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
    Card,
} from "@/components/organisms/coveredCard/styled";
import {ArrowIcon} from "@/components/atoms/icons";
import {NotCovered} from "@/components/templates/home/components/notCovered";
import {ICoveredCardProps} from "@/components/organisms/coveredCard/types";
import {Flex} from "@/components/atoms/flex";

const LeftCard = (props: any): JSX.Element => {

    const data = props.data.left;

    return (
        <LeftCardStyled>
            {data.icon}
            <TitleStyled>
                {data.title}
            </TitleStyled>
        </LeftCardStyled>
    )
};

const RightCard = (props: any): JSX.Element => {
    const data = props.data.right;

    return (
        <RightCardStyled>
            <BadgeListStyled>
                {data?.tags?.map((tag: string, index: number) => (
                    <BadgeStyled key={index}>
                        {tag}
                    </BadgeStyled>
                ))}
            </BadgeListStyled>
            <DescriptionStyled>
                <WrapperDescriptionStyled>
                    <SubContentStyled>
                        {data?.description}
                    </SubContentStyled>
                    <WrapperSubContentStyled>
                        {data?.price >= 100 && (
                            <SubContentMoneyStyled>
                                最大
                            </SubContentMoneyStyled>
                        )}
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
    )
}

const RightNotActiveCard = (): JSX.Element => (
    <RightCardNotCoveredStyled>
        <NotCovered />
    </RightCardNotCoveredStyled>
);

export const CoveredCard: React.FC<ICoveredCardProps> = (props): JSX.Element => {
    const {data} = props;

    if (!data?.right?.tags){
        return (
            <Card>
                <LeftCard data={data} />
                <RightNotActiveCard />
            </Card>
        )
    }

    return (
        <Card>
            <LeftCard data={data}/>
            <RightCard data={data}/>
        </Card>
    )
}
