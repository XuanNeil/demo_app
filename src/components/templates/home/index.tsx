import {Button, Flex as FlexA, Main, Text} from '@/components/templates/home/styled';
import {useDisclosure} from "@/components/atoms/modal/hooks";
import {DiedCard} from "@/components/templates/home/components/diedCard";
import {InJuryCard} from "@/components/templates/home/components/injuryCard";
import {NotWordCard} from "@/components/templates/home/components/notWordCard";
import {TroubleCard} from "@/components/templates/home/components/troubleCard";
import {ChildCard} from "@/components/templates/home/components/childCard";
import React from "react";
import {useFetch} from "@/components/templates/home/hooks";
import Image from "next/image";
import {images} from "@/public/images";
import {Modal, ModalBody, ModalContent, ModalHead} from "@/components/atoms/modal";
import {ChildIcon, DiedIcon, InjuryIcon, NotWorkIcon, TroubleIcon} from "@/components/atoms/icons";
import {CoveredCard} from "@/components/organisms/coveredCard";
import {Flex} from "@/components/atoms/flex";

export function Home() {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const {data, isLoading} =  useFetch();

    return (
        <Main>
            <Flex backgroundColor={"red"} justifyContent={"center"} alignItems={"center"}>
               <p>aaa</p>
            </Flex>
            <Button onClick={onOpen}>Show Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <>
                    <ModalHead>
                        <FlexA>
                            <Image src={images.leftPublicInsurance} alt={"left public insurance"} height={'110'} width={"132"}/>
                            <Text>あなたが公的保険で受け取れる金額</Text>
                            <Image src={images.rightPublicInsurance} alt={"right public insurance"} height={'110'} width={"132"}/>
                        </FlexA>
                    </ModalHead>
                    <ModalBody>
                        <>
                            <CoveredCard
                                data={{
                                    left: {
                                        icon: <DiedIcon width={"48px"} />,
                                        title: "亡くなった時"
                                    },
                                    right: {
                                        description: "ひと月あたり",
                                        ...data?.whenHeDied
                                    }
                                }}
                            />
                            <CoveredCard
                                data={{
                                    left: {
                                        icon: <InjuryIcon width={"48px"} />,
                                        title: "病気やケガで\n" +
                                            "医療費が高額になった時"
                                    },
                                    right: {
                                        description: "ひと月あたり自己負担上限額",
                                        ...data?.illnessOrInjury
                                    }
                                }}
                            />

                            <CoveredCard
                                data={{
                                    left: {
                                        icon: <NotWorkIcon width={"48px"} />,
                                        title: "働けなくなった時"
                                    },
                                    right: {
                                        description: "ひと月あたり",
                                        ...data?.notWork
                                    }
                                }}
                            />

                            <CoveredCard
                                data={{
                                    left: {
                                        icon: <TroubleIcon width={"48px"} />,
                                        title: "障害状態になった時"
                                    },
                                    right: {
                                        description: "障害等級2級の場合、ひと月あたり",
                                        ...data?.whenInTrouble
                                    }
                                }}
                            />

                            <CoveredCard
                                data={{
                                    left: {
                                        icon: <ChildIcon width={"48px"} />,
                                        title: "子どもが生まれる時"
                                    },
                                    right: {
                                        description: "すべての合計で",
                                        ...data?.child
                                    }
                                }}
                            />

                        </>
                    </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </Main>
    )
}
