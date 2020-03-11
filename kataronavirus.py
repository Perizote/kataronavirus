
class KataronaVirus:
    coronavirus_score = 0
    humanity_score = 0
    score = '000:000'

    def person_killed(self):
        self.coronavirus_score += 1

    def couple_killed(self):
        self.coronavirus_score += 2

    def scoring(self):
        return f'00{self.coronavirus_score}:00{self.humanity_score}'
