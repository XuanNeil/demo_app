
export interface ICovered {
    tags?: string[];
    price?: number;
}

export interface IListCovered {
    whenHeDied?: ICovered,
    illnessOrInjury?: ICovered,
    notWork?: ICovered,
    whenInTrouble?: ICovered,
    child?: ICovered
}