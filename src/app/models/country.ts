export class Country {
    name: string;
    flag: string;
    capital: string;
    population: number;
    currency: string;
    area: string;

    constructor(n: string, cap: string, pop: number, cur: string, flag: string = "", area: string = "Terre") {
        this.name = n;
        this.flag = flag;
        this.capital = cap;
        this.population = pop;
        this.currency = cur;
        this.area = area;
    }
}
