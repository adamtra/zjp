export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    increaseQuality(item: Item) {
        if (item.quality < 50) {
            item.quality = item.quality + 1
        }
    }

    descreaseQuality(item: Item) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            if (item.quality > 0) {
                item.quality = item.quality - 1
                if (item.name.lastIndexOf('Conjured ', 0) === 0 && item.quality > 0) {
                    item.quality = item.quality - 1;
                }
            }
        }
    }

    backstageIncreaseQuality(item: Item) {
        if (item.sellIn < 11) {
            this.increaseQuality(item);
        }
        if (item.sellIn < 6) {
            this.increaseQuality(item);
        }
    }

    decreaseSellIn(item: Item) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.sellIn = item.sellIn - 1;
        }
    }

    beforeSellIn(item: Item) {
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            this.descreaseQuality(item);
        } else {
            this.increaseQuality(item);
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                this.backstageIncreaseQuality(item);
            }
        }
    }

    afterSellIn(item: Item) {
        if (item.name != 'Aged Brie') {
            if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                this.descreaseQuality(item);
            } else {
                item.quality = item.quality - item.quality
            }
        } else {
            this.increaseQuality(item);
        }
    }

    updateQuality() {
        for (const item of this.items) {
            this.beforeSellIn(item);
            this.decreaseSellIn(item);
            if (item.sellIn < 0) {
                this.afterSellIn(item);
            }
        }

        return this.items;
    }
}