//
//  ScoreTests.swift
//  KatacoronavirusTests
//
//  Created by Victor Berga on 11/03/2020.
//  Copyright © 2020 es.mercadona.tests. All rights reserved.
//

import XCTest
@testable import Katacoronavirus

class ScoreTests: XCTestCase {
    func testGivenANumberOfDeathsAndLives_formatsTheOutput() {
        XCTAssertEqual("001:002", Score.format((deaths: 1, survived: 2)))
    }

    func testGivenAListOfEvents_returnsScore() {
        let input = [Action.death(.single), .death(.couple), .survive(.family)]

        XCTAssertEqual(3, Score.calculate(for: input).0)
        XCTAssertEqual(4, Score.calculate(for: input).1)
    }
}
