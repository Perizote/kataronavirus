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

    var value: Int { 0 }
}

func calculateScore(for actions: [Action]) -> (Int, Int) {
    fatalError()
}

func output(deaths: Int, lives: Int) -> String {
    let left = String(format: "%03d", deaths)
    let right = String(format: "%03d", lives)
    return "\(left):\(right)"
}
