
class KataronaVirus:
    ONE_PERSON_SCORE = 1
    COUPLE_SCORE = 2
    FAMILY_SCORE = 4

    coronavirus_score = 0
    humanity_score = 0

    def person_killed(self):
        self.coronavirus_score += self.ONE_PERSON_SCORE

    def couple_killed(self):
        self.coronavirus_score += self.COUPLE_SCORE

    def family_killed(self):
        self.coronavirus_score += self.FAMILY_SCORE

    def person_saved(self):
        self.humanity_score += self.ONE_PERSON_SCORE

    def scoring(self):
        return f'00{self.coronavirus_score}:00{self.humanity_score}'
