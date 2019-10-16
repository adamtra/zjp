import { Item } from "./item";

export class Sulfuras extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        super(`Sulfuras, ${name}`, sellIn, quality);
    }

    decreaseSellIn() {}

    increaseQuality() {}

    desceaseQuality() {
        return;
    }
}