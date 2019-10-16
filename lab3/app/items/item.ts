export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    decreaseSellIn() {
        this.sellIn--;
        if (this.sellIn < 0) {
            this.decreaseQuality();
        }
    }

    increaseQuality() {
        if (this.quality < 50) {
            this.quality = this.quality + 1;
        }
    }

    decreaseQuality() {
        if (this.quality > 0) {
            this.quality = this.quality - 1;
        }
    }
}