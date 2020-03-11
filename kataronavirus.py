class CovidScore:

    SCORE_LENGTH = 3

    def __init__(self):
        self._killed = 0
        self._healed = 0

    def kill_one(self):
        self._killed += 1

    def kill_couple(self):
        self._killed +=2

    def heal_one(self):
        self._healed += 1

    def get_score(self) -> str:
        return f'{self._format(self._killed)}-{self._format(self._healed)}'

    def _format(self, number):
        return str(number).zfill(self.SCORE_LENGTH)