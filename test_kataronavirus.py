import kataronavirus


class TestKataronaVirus:

    def test_initial_score_is_0(self):
        scoring = kataronavirus.KataronaVirus()

        assert scoring.score == '000:000'

    def test_score_is_1_when_one_person_died(self):
        scoring = kataronavirus.KataronaVirus()
        scoring.person_killed()

        assert scoring.score == '001:000'
