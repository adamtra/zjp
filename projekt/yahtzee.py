class Yahtzee:

    def __init__(self, d1, d2, d3, d4, d5):
        self.dice = [0] * 5
        self.dice[0] = d1
        self.dice[1] = d2
        self.dice[2] = d3
        self.dice[3] = d4
        self.dice[4] = d5

    @staticmethod
    def chance(d1, d2, d3, d4, d5):
        total = 0
        total += d1
        total += d2
        total += d3
        total += d4
        total += d5
        return total

    @staticmethod
    def yahtzee(dice):
        i = 0
        for die in dice:
            if i != 0 and die != dice[i - 1]:
                return 0
            i += 1
        return 50


    @staticmethod
    def sumByNumber(dices, number):
        sum = 0
        for dice in dices:
            if dice == number:
                sum += number
        return sum

    @staticmethod
    def ones(d1, d2, d3, d4, d5):
        return Yahtzee.sumByNumber([d1, d2, d3, d4, d5], 1)

    @staticmethod
    def twos(d1, d2, d3, d4, d5):
        return Yahtzee.sumByNumber([d1, d2, d3, d4, d5], 2)

    @staticmethod
    def threes(d1, d2, d3, d4, d5):
        return Yahtzee.sumByNumber([d1, d2, d3, d4, d5], 3)

    def fours(self):
        return Yahtzee.sumByNumber(self.dice, 4)

    def fives(self):
        return Yahtzee.sumByNumber(self.dice, 5)

    def sixes(self):
        return Yahtzee.sumByNumber(self.dice, 6)

    @staticmethod
    def sumOfAKind(dices, kind):
        counts = [0] * 6
        for dice in dices:
            counts[dice - 1] += 1
        for i in range(len(dices), 0, -1):
            if counts[i] == kind:
                return (i + 1) * kind
        return 0

    @staticmethod
    def score_pair(d1, d2, d3, d4, d5):
        return Yahtzee.sumOfAKind([d1, d2, d3, d4, d5], 2)

    @staticmethod
    def two_pair(d1, d2, d3, d4, d5):
        counts = [0] * 6
        counts[d1 - 1] += 1
        counts[d2 - 1] += 1
        counts[d3 - 1] += 1
        counts[d4 - 1] += 1
        counts[d5 - 1] += 1
        n = 0
        score = 0
        for i in range(6):
            if (counts[6 - i - 1] == 2):
                n = n + 1
                score += (6 - i)

        if (n == 2):
            return score * 2
        else:
            return 0

    @staticmethod
    def four_of_a_kind(d1, d2, d3, d4, d5):
        return Yahtzee.sumOfAKind([d1, d2, d3, d4, d5], 4)

    @staticmethod
    def three_of_a_kind(d1, d2, d3, d4, d5):
        return Yahtzee.sumOfAKind([d1, d2, d3, d4, d5], 3)

    @staticmethod
    def smallStraight(d1, d2, d3, d4, d5):
        tallies = [0] * 6
        tallies[d1 - 1] += 1
        tallies[d2 - 1] += 1
        tallies[d3 - 1] += 1
        tallies[d4 - 1] += 1
        tallies[d5 - 1] += 1
        if (tallies[0] == 1 and
                tallies[1] == 1 and
                tallies[2] == 1 and
                tallies[3] == 1 and
                tallies[4] == 1):
            return 15
        return 0

    @staticmethod
    def largeStraight(d1, d2, d3, d4, d5):
        tallies = [0] * 6
        tallies[d1 - 1] += 1
        tallies[d2 - 1] += 1
        tallies[d3 - 1] += 1
        tallies[d4 - 1] += 1
        tallies[d5 - 1] += 1
        if (tallies[1] == 1 and
                tallies[2] == 1 and
                tallies[3] == 1 and
                tallies[4] == 1
                and tallies[5] == 1):
            return 20
        return 0

    @staticmethod
    def fullHouse(d1, d2, d3, d4, d5):
        tallies = []
        _2 = False
        i = 0
        _2_at = 0
        _3 = False
        _3_at = 0

        tallies = [0] * 6
        tallies[d1 - 1] += 1
        tallies[d2 - 1] += 1
        tallies[d3 - 1] += 1
        tallies[d4 - 1] += 1
        tallies[d5 - 1] += 1

        for i in range(6):
            if (tallies[i] == 2):
                _2 = True
                _2_at = i + 1

        for i in range(6):
            if (tallies[i] == 3):
                _3 = True
                _3_at = i + 1

        if (_2 and _3):
            return _2_at * 2 + _3_at * 3
        else:
            return 0
