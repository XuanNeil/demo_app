
export interface ICovered {
    tags?: string[];
    price?: number;
}

export interface IListCoveredResponse {
    data: {
        whenHeDied?: ICovered,
        illnessOrInjury?: ICovered,
        notWork?: ICovered,
        whenInTrouble?: ICovered,
        child?: ICovered
    }
}