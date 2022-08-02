declare class Car11 {
    color: string;
    constructor(color: string);
    start(): void;
}
declare const bmw2: Car11;
declare class team {
    private boss;
    name: string;
    protected manager: string;
    static memberNum: number;
    readonly foundationDay: number;
    constructor(team: string);
    do(): void;
}
declare class baseball extends team {
    constructor(team: string);
    baseball(): void;
}
declare const eagles: team;
declare const tigers: baseball;
declare abstract class soccerTeam {
    teamName: string;
    memberNum: number;
    constructor(name: string, num: number);
    start(): void;
    abstract do(): void;
}
declare class mu extends soccerTeam {
    constructor(name: string, num: number);
    do(): void;
}
declare const MU: mu;
