package com.peris

class Manager {

    private var kills = 0
    private var safe = 0

    fun execute(): String {
        return "${kills.toString().padStart(3, '0')}:${safe.toString().padStart(3, '0')}"
    }
}