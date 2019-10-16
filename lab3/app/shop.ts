import { Item } from "./items/item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }


    updateQuality() {
        for (const item of this.items) {
            item.decreaseQuality();
            item.decreaseSellIn();
        }

        return this.items;
    }
}