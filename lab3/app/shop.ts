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


    updateQuality() {
        for (const item of this.items) {
            this.higherSellIn(item);
            this.decreaseSellIn(item);
            this.lowerSellIn(item);
        }

        return this.items;
    }

    private decreaseSellIn(item: Item) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.sellIn = item.sellIn - 1;
        }
    }

    private lowerSellIn(item: Item) {
        if (item.sellIn < 0) {
            if (item.name == 'Aged Brie') {
                this.increaseQuality(item);
            }
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                item.quality = 0;
            }
            this.decreaseNormalPoduct(item);
        }
    }

    private decreaseNormalPoduct(item: Item) {
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            this.decreaseQuality(item);
        }
    }

    private higherSellIn(item: Item) {
        this.decreaseNormalPoduct(item);
        if (item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality < 50) {
                item.quality = item.quality + 1;
                this.increaseBackstageQuality(item);
            }
        }
    }

    private increaseBackstageQuality(item: Item) {
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
                this.increaseQuality(item);
            }
            if (item.sellIn < 6) {
                this.increaseQuality(item);
            }
        }
    }

    private increaseQuality(item: Item) {
        if (item.quality < 50) {
            item.quality = item.quality + 1;
        }
    }

    private decreaseQuality(item: Item) {
        if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality = item.quality - 1;
                this.conjuredItem(item);
            }
        }
    }

    private conjuredItem(item: Item) {
        if (item.name.lastIndexOf('Conjured ', 0) === 0 && item.quality > 0) {
            item.quality = item.quality - 1;
        }
    }
}