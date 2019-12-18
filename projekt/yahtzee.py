class Yahtzee:

    max_val = 6

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
        counts = self.count_occurrences()
        for i in range(self.max_val, 0, -1):
            if counts[i - 1] == kind:
                return i * kind
        return 0

    def score_pair(self):
        return self.sum_of_a_kind(2)

    def count_occurrences(self):
        counts = [0] * self.max_val
        for die in self.dice:
            counts[die - 1] += 1
        return counts

    def two_collections(self, first, second):
        counts = self.count_occurrences()
        found = 0
        score = 0
        for i in range(self.max_val, 0, -1):
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

    def straight(self, start, end):
        counts = self.count_occurrences()
        score = 0
        for i in range(start - 1, end):
            if counts[i] == 1:
                score += i + 1
            else:
                return 0
        return score

    def small_straight(self):
        return self.straight(1, 5)

    def large_straight(self):
        return self.straight(2, 6)

    def full_house(self):
        return self.two_collections(2, 3)
