from kataronavirus.kataronavirus import KataronaVirus


class TestKataronaVirus:

    def test_initial_score_is_0(self):
        scoring = KataronaVirus()

        assert scoring.scoring() == '000:000'

    def test_score_is_1_0_when_one_person_died(self):
        scoring = KataronaVirus()
        scoring.person_killed()

        assert scoring.scoring() == '001:000'

    def test_score_is_2_0_when_one_couple_died(self):
        scoring = KataronaVirus()
        scoring.couple_killed()

        assert scoring.scoring() == '002:000'

    def test_score_is_3_0_when_person_died_and_one_couple_died(self):
        scoring = KataronaVirus()
        scoring.person_killed()
        scoring.couple_killed()

        assert scoring.scoring() == '003:000'

    def test_score_is_4_0_when_family_dies(self):
        scoring = KataronaVirus()
        scoring.family_killed()

        assert scoring.scoring() == '004:000'

    def test_score_is_0_1_when_person_saved(self):
        scoring = KataronaVirus()
        scoring.person_saved()

        assert scoring.scoring() == '000:001'
