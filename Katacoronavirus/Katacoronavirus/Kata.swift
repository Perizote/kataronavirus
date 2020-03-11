//
//  Kata.swift
//  Katacoronavirus
//
//  Created by Victor Berga on 11/03/2020.
//  Copyright © 2020 es.mercadona.tests. All rights reserved.
//

import Foundation

func output(deaths: Int, lives: Int) -> String {
    let left = String(format: "%03d", deaths)
    let right = String(format: "%03d", lives)
    return "\(left):\(right)"
}
