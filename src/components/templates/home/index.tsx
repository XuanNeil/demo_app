import {BodyModalStyled, MainStyled} from '@/components/templates/home/styled';
import {useModal} from "@/components/molecules/modal/hooks";
import {Modal} from "@/components/molecules/modal";
import {DiedCard} from "@/components/templates/home/components/diedCard";
import {InJuryCard} from "@/components/templates/home/components/injuryCard";
import {NotWordCard} from "@/components/templates/home/components/notWordCard";
import {TroubleCard} from "@/components/templates/home/components/troubleCard";
import {ChildCard} from "@/components/templates/home/components/childCard";
import React from "react";
import {HeadModal} from "@/components/templates/home/components/headModal";
import {useFetch} from "@/components/templates/home/hooks";

export function Home() {

    const {isOpen, onOpen, onClose} = useModal();

    const {data, isLoading} =  useFetch();

    return (
        <MainStyled>
            <button onClick={onOpen}>Show Modal</button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <>
                    <HeadModal/>
                    <BodyModalStyled>
                        <DiedCard  data={data?.whenHeDied}/>
                        <InJuryCard data={data?.illnessOrInjury} />
                        <NotWordCard data={data?.notWork} />
                        <TroubleCard data={data?.whenInTrouble} />
                        <ChildCard data={data?.child} />
                    </BodyModalStyled>
                </>
            </Modal>
        </MainStyled>
    )
}
