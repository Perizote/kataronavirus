class CovidScore:

    def __init__(self):
        self._score = 0

    def kill_one(self):
        self._score += 1

    def kill_couple(self):
        self._score +=2

    def get_score(self) -> str:
        return f'00{self._score}-000'