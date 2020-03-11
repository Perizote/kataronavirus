//
//  Action.swift
//  Katacoronavirus
//
//  Created by Victor Berga on 11/03/2020.
//  Copyright © 2020 es.mercadona.tests. All rights reserved.
//

import Foundation

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

    static func death(_ action: Action) -> Bool {
        switch action {
        case .death: return true
        case .survive: return false
        }
    }

    static func survive(_ action: Action) -> Bool {
        switch action {
        case .death: return false
        case .survive: return true
        }
    }
}
