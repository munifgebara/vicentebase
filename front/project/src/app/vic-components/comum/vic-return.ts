import { BaseEntity } from "./base-entity";


export class VicReturn {

    values: BaseEntity[];
    quantity: number;
    firstResult: number;
    hasMore: boolean;

    constructor(b: BaseEntity[] = []) {
        this.values = b;
        this.quantity = b.length;
        this.firstResult = 0;
        this.hasMore = false;
    }

}