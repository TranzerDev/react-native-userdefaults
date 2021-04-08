//
//  RNUserdefaults.swift
//  RNUserdefaults
//
//  Created by Kamaal Farah on 08/04/2021.
//  Copyright © 2021 Kamaal. All rights reserved.
//

import Foundation

@objc(RNUserdefaults)
class RNUserdefaults: NSObject {

    @objc
    func setWithSuite(_ value: String, forKey key: String, inSuite suite: String) {
        let valueData = value.data(using: .utf8)
        UserDefaults(suiteName: suite)?.set(valueData, forKey: key)
    }

    @objc
    func set(_ value: String, forKey key: String) {
        let valueData = value.data(using: .utf8)
        UserDefaults.standaard.set(valueData, forKey: key)
    }

    @objc
    static func requiresMainQueueSetup() -> Bool {
        true
    }

}
