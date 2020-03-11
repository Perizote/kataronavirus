class CovidScore:

    SCORE_LENGTH = 3
    INITIAL_VALUE = 0
    PERSON_VALUE = 1
    COUPLE_VALUE = 2
    FAMILY_VALUE = 4

    def __init__(self):
        self._killed = self.INITIAL_VALUE
        self._healed = self.INITIAL_VALUE

    def kill_one(self):
        self._killed += self.PERSON_VALUE

    def kill_couple(self):
        self._killed += self.COUPLE_VALUE

    def kill_family(self):
        self._killed += self.FAMILY_VALUE

    def heal_one(self):
        self._healed += self.PERSON_VALUE

    def heal_couple(self):
        self._healed += self.COUPLE_VALUE

    def get_score(self) -> str:
        return f'{self._format(self._killed)}-{self._format(self._healed)}'

    def _format(self, number):
        return str(number).zfill(self.SCORE_LENGTH)