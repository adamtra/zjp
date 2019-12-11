class Yahtzee:

    def __init__(self, d1, d2, d3, d4, d5):
        self.dice = [0] * 5
        self.dice[0] = d1
        self.dice[1] = d2
        self.dice[2] = d3
        self.dice[3] = d4
        self.dice[4] = d5

    def chance(self):
        total = 0
        total += self.dice[0]
        total += self.dice[1]
        total += self.dice[2]
        total += self.dice[3]
        total += self.dice[4]
        return total

    def yahtzee(self):
        i = 0
        for die in self.dice:
            if i != 0 and die != self.dice[i - 1]:
                return 0
            i += 1
        return 50

    def sum_by_number(self, number):
        sum = 0
        for dice in self.dice:
            if dice == number:
                sum += number
        return sum

    def ones(self):
        return self.sum_by_number(1)

    def twos(self):
        return self.sum_by_number(2)

    def threes(self):
        return self.sum_by_number(3)

    def fours(self):
        return self.sum_by_number(4)

    def fives(self):
        return self.sum_by_number(5)

    def sixes(self):
        return self.sum_by_number(6)

    def sum_of_a_kind(self, kind):
        counts = [0] * 6
        for dice in self.dice:
            counts[dice - 1] += 1
        for i in range(len(self.dice), 0, -1):
            if counts[i] == kind:
                return (i + 1) * kind
        return 0

    def score_pair(self):
        return self.sum_of_a_kind(2)

    def two_pair(self):
        counts = [0] * 6
        counts[self.dice[0] - 1] += 1
        counts[self.dice[1] - 1] += 1
        counts[self.dice[2] - 1] += 1
        counts[self.dice[3] - 1] += 1
        counts[self.dice[4] - 1] += 1
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

    def four_of_a_kind(self):
        return self.sum_of_a_kind(4)

    def three_of_a_kind(self):
        return self.sum_of_a_kind(3)

    def small_straight(self):
        tallies = [0] * 6
        tallies[self.dice[0] - 1] += 1
        tallies[self.dice[1] - 1] += 1
        tallies[self.dice[2] - 1] += 1
        tallies[self.dice[3] - 1] += 1
        tallies[self.dice[4] - 1] += 1
        if (tallies[0] == 1 and
                tallies[1] == 1 and
                tallies[2] == 1 and
                tallies[3] == 1 and
                tallies[4] == 1):
            return 15
        return 0

    def large_straight(self):
        tallies = [0] * 6
        tallies[self.dice[0] - 1] += 1
        tallies[self.dice[1] - 1] += 1
        tallies[self.dice[2] - 1] += 1
        tallies[self.dice[3] - 1] += 1
        tallies[self.dice[4] - 1] += 1
        if (tallies[1] == 1 and
                tallies[2] == 1 and
                tallies[3] == 1 and
                tallies[4] == 1
                and tallies[5] == 1):
            return 20
        return 0

    def full_house(self):
        tallies = []
        _2 = False
        i = 0
        _2_at = 0
        _3 = False
        _3_at = 0

        tallies = [0] * 6
        tallies[self.dice[0] - 1] += 1
        tallies[self.dice[1] - 1] += 1
        tallies[self.dice[2] - 1] += 1
        tallies[self.dice[3] - 1] += 1
        tallies[self.dice[4] - 1] += 1

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
