class CovidScore:

    def kill_one(self):
        self._score = '001-000'

    def kill_couple(self):
        self._score = '002-000'

    def get_score(self) -> str:
        return self._score