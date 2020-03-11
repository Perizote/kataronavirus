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
    func testGivenAListOfActions_returnsCalculatedScore() {
        let input = [Action.death(.single), .death(.couple), .survive(.family)]

        XCTAssertEqual("003:004", main(input))
    }

    func testGivenAnEmptyListOfActions_returnsCalculatedScore() {
        let input = [Action]()

        XCTAssertEqual("000:000", main(input))
    }
}
