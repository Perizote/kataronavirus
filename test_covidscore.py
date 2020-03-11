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

    def test_can_add_kills(self):
        score_board = CovidScore()

        for _ in range(999):
            score_board.kill_one()
        assert score_board.get_score() == "999-000"