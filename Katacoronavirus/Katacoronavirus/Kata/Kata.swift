//
//  Kata.swift
//  Katacoronavirus
//
//  Created by Victor Berga on 11/03/2020.
//  Copyright © 2020 es.mercadona.tests. All rights reserved.
//

import Foundation

func main(_ actions: [Action]) -> String {
    Score.format(Score.calculate(for: actions))
}
