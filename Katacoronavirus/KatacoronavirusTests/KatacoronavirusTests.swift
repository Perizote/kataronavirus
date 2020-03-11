//
//  KatacoronavirusTests.swift
//  KatacoronavirusTests
//
//  Created by Victor Berga on 11/03/2020.
//  Copyright © 2020 es.mercadona.tests. All rights reserved.
//

import XCTest
@testable import Katacoronavirus

class KatacoronavirusTests: XCTestCase {
    func testGivenANumberOfDeathsAndLives_formatsTheOutput() {
        XCTAssertEqual("001:002", output(deaths: 1, lives: 2))
    }

    func testGivenAListOfEvents_returnsScore() {
        let input = [Action.death(.single), .death(.couple), .survive(.family)]

        XCTAssertEqual(3, calculateScore(for: input).0)
        XCTAssertEqual(4, calculateScore(for: input).1)
    }

    func testGivenAListOfActions_returnsCalculatedScore() {
        let input = [Action.death(.single), .death(.couple), .survive(.family)]

        XCTAssertEqual("003:004", main(input))
    }

    func testGivenAnEmptyListOfActions_returnsCalculatedScore() {
        let input = [Action]()
        
        XCTAssertEqual("000:000", main(input))
    }
}
