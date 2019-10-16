import { Item } from "./item";

export class Conjured extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        super(`Conjured ${name}`, sellIn, quality);
    }

    decreaseQuality() {
        super.decreaseQuality();
        super.decreaseQuality();
    }
}