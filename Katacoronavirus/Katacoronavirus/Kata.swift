//
//  Kata.swift
//  Katacoronavirus
//
//  Created by Victor Berga on 11/03/2020.
//  Copyright © 2020 es.mercadona.tests. All rights reserved.
//

import Foundation

enum People: Int {
    case single = 1
    case couple = 2
    case family = 4
}

enum Action {
    case death(People)
    case survive(People)

    var people: People {
        switch self {
        case .death(let people): return people
        case .survive(let people): return people
        }
    }

    var value: Int {
        people.rawValue
    }
}

func death(_ action: Action) -> Bool {
    switch action {
    case .death: return true
    case .survive: return false
    }
}

func survive(_ action: Action) -> Bool {
    switch action {
    case .death: return false
    case .survive: return true
    }
}

func main(_ actions: [Action]) -> String {
    return ""
}

func calculateScore(for actions: [Action]) -> (Int, Int) {
    let totalDeaths = actions.filter(death).map { $0.value }.reduce(0, +)
    let totalSurvived = actions.filter(survive).map { $0.value }.reduce(0, +)

    return (totalDeaths, totalSurvived)
}

func output(_ input: (deaths: Int, survived: Int)) -> String {
    let deathScore = String(format: "%03d", input.deaths)
    let surviveScore = String(format: "%03d", input.survived)
    return "\(deathScore):\(surviveScore)"
}
