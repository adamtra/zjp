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

    dontDescreaseQuality = [
        'Sulfuras, Hand of Ragnaros',
        'Backstage passes to a TAFKAL80ETC concert',
        'Aged Brie'
    ];

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    increaseQuality(item: Item) {
        if (item.quality < 50) {
            item.quality = item.quality + 1
        }
    }

    conjuredDecreaseQuality(item: Item) {
        this.decreaseQuality(item);
        this.decreaseQuality(item);
    }

    decreaseQuality(item: Item) {
        if (this.dontDescreaseQuality.indexOf(item.name) === -1) {
            if (item.quality > 0) {
                item.quality = item.quality - 1;
            }
        }
    }

    backstageIncreaseQuality(item: Item) {
        this.increaseQuality(item);
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
        if (item.name.lastIndexOf('Conjured ', 0) === 0) {
            this.conjuredDecreaseQuality(item);
        } else if (item.name == 'Aged Brie') {
            this.increaseQuality(item);
        } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            this.backstageIncreaseQuality(item);
        } else {
            this.decreaseQuality(item);
        }
    }

    negativeSellIn(item: Item) {
        if (item.name == 'Aged Brie') {
            this.increaseQuality(item);
        } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            item.quality = 0
        } else if (item.name.lastIndexOf('Conjured ', 0) === 0) {
            this.conjuredDecreaseQuality(item);
        } else {
            this.decreaseQuality(item);
        }   
    }

    updateQuality() {
        for (const item of this.items) {
            this.beforeSellIn(item);
            this.decreaseSellIn(item);
            if (item.sellIn < 0) {
                this.negativeSellIn(item);
            }
        }

        return this.items;
    }
}