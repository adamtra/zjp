import { expect } from "chai";
import { GildedRose, Item } from "../app/shop";

describe('Gilded Rose', () => {
    it('Normal item', () => {
        const expected = [
            { sellIn: 10, quality: 20 },
            { sellIn: 9, quality: 19 },
            { sellIn: 8, quality: 18 },
            { sellIn: 7, quality: 17 },
            { sellIn: 6, quality: 16 },
            { sellIn: 5, quality: 15 },
            { sellIn: 4, quality: 14 },
            { sellIn: 3, quality: 13 },
            { sellIn: 2, quality: 12 },
            { sellIn: 1, quality: 11 },
            { sellIn: 0, quality: 10 },
            { sellIn: -1, quality: 8 },
            { sellIn: -2, quality: 6 },
            { sellIn: -3, quality: 4 },
            { sellIn: -4, quality: 2 },
            { sellIn: -5, quality: 0 },
            { sellIn: -6, quality: 0 },
            { sellIn: -7, quality: 0 },
            { sellIn: -8, quality: 0 },
            { sellIn: -9, quality: 0 },
            { sellIn: -10, quality: 0 },
            { sellIn: -11, quality: 0 },
            { sellIn: -12, quality: 0 },
            { sellIn: -13, quality: 0 },
            { sellIn: -14, quality: 0 },
            { sellIn: -15, quality: 0 },
            { sellIn: -16, quality: 0 },
            { sellIn: -17, quality: 0 },
            { sellIn: -18, quality: 0 },
            { sellIn: -19, quality: 0 },
        ]
        const items = [new Item("+5 Dexterity Vest", 10, 20)];
        testItem(items, expected);
    });

    it('Aged Brie', () => {
        const expected = [
            { sellIn: 2, quality: 0 },
            { sellIn: 1, quality: 1 },
            { sellIn: 0, quality: 2 },
            { sellIn: -1, quality: 4 },
            { sellIn: -2, quality: 6 },
            { sellIn: -3, quality: 8 },
            { sellIn: -4, quality: 10 },
            { sellIn: -5, quality: 12 },
            { sellIn: -6, quality: 14 },
            { sellIn: -7, quality: 16 },
            { sellIn: -8, quality: 18 },
            { sellIn: -9, quality: 20 },
            { sellIn: -10, quality: 22 },
            { sellIn: -11, quality: 24 },
            { sellIn: -12, quality: 26 },
            { sellIn: -13, quality: 28 },
            { sellIn: -14, quality: 30 },
            { sellIn: -15, quality: 32 },
            { sellIn: -16, quality: 34 },
            { sellIn: -17, quality: 36 },
            { sellIn: -18, quality: 38 },
            { sellIn: -19, quality: 40 },
            { sellIn: -20, quality: 42 },
            { sellIn: -21, quality: 44 },
            { sellIn: -22, quality: 46 },
            { sellIn: -23, quality: 48 },
            { sellIn: -24, quality: 50 },
            { sellIn: -25, quality: 50 },
            { sellIn: -26, quality: 50 },
            { sellIn: -27, quality: 50 },
        ]
        const items = [new Item("Aged Brie", 2, 0)];
        testItem(items, expected);
    });

    it('Sulfuras, Hand of Ragnaros', () => {
        const expected = [
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
            { sellIn: 0, quality: 80 },
        ]
        const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
        testItem(items, expected);
    });
    
    it('Backstage passes', () => {
        const expected = [
            { sellIn: 10, quality: 49 },
            { sellIn: 9, quality: 50 },
            { sellIn: 8, quality: 50 },
            { sellIn: 7, quality: 50 },
            { sellIn: 6, quality: 50 },
            { sellIn: 5, quality: 50 },
            { sellIn: 4, quality: 50 },
            { sellIn: 3, quality: 50 },
            { sellIn: 2, quality: 50 },
            { sellIn: 1, quality: 50 },
            { sellIn: 0, quality: 50 },
            { sellIn: -1, quality: 0 },
            { sellIn: -2, quality: 0 },
            { sellIn: -3, quality: 0 },
            { sellIn: -4, quality: 0 },
            { sellIn: -5, quality: 0 },
            { sellIn: -6, quality: 0 },
            { sellIn: -7, quality: 0 },
            { sellIn: -8, quality: 0 },
            { sellIn: -9, quality: 0 },
            { sellIn: -10, quality: 0 },
            { sellIn: -11, quality: 0 },
            { sellIn: -12, quality: 0 },
            { sellIn: -13, quality: 0 },
            { sellIn: -14, quality: 0 },
            { sellIn: -15, quality: 0 },
            { sellIn: -16, quality: 0 },
            { sellIn: -17, quality: 0 },
            { sellIn: -18, quality: 0 },
            { sellIn: -19, quality: 0 },
        ]
        const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)];
        testItem(items, expected);
    });

    it('Conjured', () => {
        const expected = [
            { sellIn: 3, quality: 6 },
            { sellIn: 2, quality: 4 },
            { sellIn: 1, quality: 2 },
            { sellIn: 0, quality: 0 },
            { sellIn: -1, quality: 0 },
            { sellIn: -2, quality: 0 },
            { sellIn: -3, quality: 0 },
            { sellIn: -4, quality: 0 },
            { sellIn: -5, quality: 0 },
            { sellIn: -6, quality: 0 },
            { sellIn: -7, quality: 0 },
            { sellIn: -8, quality: 0 },
            { sellIn: -9, quality: 0 },
            { sellIn: -10, quality: 0 },
            { sellIn: -11, quality: 0 },
            { sellIn: -12, quality: 0 },
            { sellIn: -13, quality: 0 },
            { sellIn: -14, quality: 0 },
            { sellIn: -15, quality: 0 },
            { sellIn: -16, quality: 0 },
            { sellIn: -17, quality: 0 },
            { sellIn: -18, quality: 0 },
            { sellIn: -19, quality: 0 },
            { sellIn: -20, quality: 0 },
            { sellIn: -21, quality: 0 },
            { sellIn: -22, quality: 0 },
            { sellIn: -23, quality: 0 },
            { sellIn: -24, quality: 0 },
            { sellIn: -25, quality: 0 },
            { sellIn: -26, quality: 0 },
        ]
        const items = [new Item("Conjured Mana Cake", 3, 6)];
        testItem(items, expected);
    });

});

function testItem(items: Item[], expected: { sellIn: number; quality: number; }[]) {
    const gildedRose = new GildedRose(items);
    for (let i = 0; i < 30; i++) {
        expect(items[0].sellIn).to.equal(expected[i].sellIn);
        expect(items[0].quality).to.equal(expected[i].quality);
        gildedRose.updateQuality();
    }
}
