import styles from '@/components/templates/home/styled.module.css';
import {useModal} from "@/components/molecules/modal/hooks";
import {Modal} from "@/components/molecules/modal";
import {DiedCard} from "@/components/templates/home/components/diedCard";
import {InJuryCard} from "@/components/templates/home/components/injuryCard";
import {NotWordCard} from "@/components/templates/home/components/notWordCard";
import {TroubleCard} from "@/components/templates/home/components/troubleCard";
import {ChildCard} from "@/components/templates/home/components/childCard";
import Image from "next/image";
import {images} from "@/public/images";
import {ModalHeadStyled, TextHeadStyled} from "@/components/molecules/modal/styled";
import React from "react";

const data = {
    whenHeDied: {
        tags: ["遺族基礎年金", "遺族基礎年金"],
        price: 16
    },
    illnessOrInjury: {
        tags: ["高額療養費制度"],
        price: 11
    },
    notWork: {
        tags: ["傷病手当金"],
        price: 20
    },
    whenInTrouble: {
        tags: ["障害基礎年金", "障害厚生年金"],
        price: 20
    },
    child: {
        tags: ["出産育児一時金", "出産手当金", "育児休業給付金"],
        price: 294
    }
};

export function Home() {

    const {isOpen, onOpen, onClose} = useModal();

    return (
        <main className={styles.main}>
            <button onClick={onOpen}>Show Modal</button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <>
                    <ModalHeadStyled>
                        <Image src={images.leftPublicInsurance} alt={"left public insurance"} height={'110'} width={"132"}/>
                        <TextHeadStyled>
                            あなたが公的保険で受け取れる金額
                        </TextHeadStyled>
                        <Image src={images.rightPublicInsurance} alt={"right public insurance"} height={'110'} width={"132"}/>
                    </ModalHeadStyled>
                    <DiedCard  data={data.whenHeDied}/>
                    <InJuryCard data={data.illnessOrInjury} />
                    <NotWordCard data={data.notWork} />
                    <TroubleCard data={data.whenInTrouble} />
                    <ChildCard data={data.child} />
                </>
            </Modal>
        </main>
    )
}
