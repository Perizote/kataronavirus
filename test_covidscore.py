from kataronavirus import CovidScore

class TestCovidScore:

    def test_kills_one_person(self):
        score_board = CovidScore()

        score_board.kill_one()

        assert score_board.get_score() == "001-000"

    def test_kills_one_couple(self):
        score_board = CovidScore()

        score_board.kill_couple()

        assert score_board.get_score() == "002-000"

    def test_kills_one_family(self):
        score_board = CovidScore()

        score_board.kill_family()

        assert score_board.get_score() == "004-000"

    def test_different_kind_of_kills_are_added(self):
        score_board = CovidScore()

        score_board.kill_one()
        score_board.kill_one()
        score_board.kill_couple()
        score_board.kill_couple()
        score_board.kill_family()

        assert score_board.get_score() == "010-000"

    def test_heals_a_person(self):
        score_board = CovidScore()

        score_board.heal_one()

        assert score_board.get_score() == "000-001"

    def test_heals_a_couple(self):
        score_board = CovidScore()

        score_board.heal_couple()

        assert score_board.get_score() == "000-002"

    def test_heals_a_family(self):
        score_board = CovidScore()

        score_board.heal_family()

        assert score_board.get_score() == "000-004"
