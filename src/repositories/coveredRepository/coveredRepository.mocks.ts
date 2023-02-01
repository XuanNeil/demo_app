import {IListCoveredResponse} from "@/repositories/coveredRepository/coveredRepository.types";

export const listCoveredResponseMock: IListCoveredResponse= {
    data: {
        whenHeDied: {
            tags: ["遺族基礎年金", "遺族基礎年金"],
            price: 16
        },
        illnessOrInjury: undefined,
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
    }
};