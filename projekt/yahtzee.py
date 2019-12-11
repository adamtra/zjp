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
        for i in range(6, 0, -1):
            if counts[i - 1] == kind:
                return i * kind
        return 0

    def score_pair(self):
        return self.sum_of_a_kind(2)

    def two_collections(self, first, second):
        counts = [0] * 6
        for die in self.dice:
            counts[die - 1] += 1
        found = 0
        score = 0
        for i in range(6, 0, -1):
            if counts[i - 1] == first or counts[i - 1] == second:
                found += 1
                if counts[i - 1] == first:
                    score += i * first
                else:
                    score += i * second
        if found == 2:
            return score
        else:
            return 0

    def two_pair(self):
        return self.two_collections(2, 2)

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
        return self.two_collections(2, 3)
