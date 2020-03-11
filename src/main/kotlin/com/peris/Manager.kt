package com.peris

class Manager {

    private var kills = 0
    private var safe = 0

    fun execute(): String {
        return "${kills.toString().padStart(3, '0')}:${safe.toString().padStart(3, '0')}"
    }

    fun kill() {
        kills++
    }

    fun kill2() {
        kills += 2
    }

    fun kill3() {
        kills += 3
    }
}
