import {IListCoveredResponse} from "@/repositories/coveredRepository/coveredRepository.types";
import {listCoveredResponseMock} from "@/repositories/coveredRepository/coveredRepository.mocks";

export class CoveredRepository {

    list(): Promise<IListCoveredResponse>{
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(listCoveredResponseMock)
            }, 1000);
        })
    }
}