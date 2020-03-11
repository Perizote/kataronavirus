class Value:
    INITIAL = 0
    PERSON = 1
    COUPLE = 2
    FAMILY = 4


class CovidScore:

    SCORE_LENGTH = 3

    def __init__(self):
        self._killed = Value.INITIAL
        self._healed = Value.INITIAL

    def kill_one(self):
        self._killed += Value.PERSON

    def kill_couple(self):
        self._killed += Value.COUPLE

    def kill_family(self):
        self._killed += Value.FAMILY

    def heal_one(self):
        self._healed += Value.PERSON

    def heal_couple(self):
        self._healed += Value.COUPLE

    def heal_family(self):
        self._healed += Value.FAMILY

    def get_score(self) -> str:
        return f'{self._format(self._killed)}-{self._format(self._healed)}'

    def _format(self, number):
        return str(number).zfill(self.SCORE_LENGTH)