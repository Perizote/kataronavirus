//
//  Score.swift
//  Katacoronavirus
//
//  Created by Victor Berga on 11/03/2020.
//  Copyright © 2020 es.mercadona.tests. All rights reserved.
//

import Foundation

struct Score {
    static func calculate(for actions: [Action]) -> (Int, Int) {
        let totalDeaths = actions.filter(Action.death).map { $0.value }.reduce(0, +)
        let totalSurvived = actions.filter(Action.survive).map { $0.value }.reduce(0, +)

        return (totalDeaths, totalSurvived)
    }

    static func format(_ input: (deaths: Int, survived: Int)) -> String {
        let deathScore = String(format: "%03d", input.deaths)
        let surviveScore = String(format: "%03d", input.survived)
        return "\(deathScore):\(surviveScore)"
    }
}
