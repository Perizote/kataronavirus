package com.peris

import junit.framework.Assert.assertEquals
import org.junit.Before
import org.junit.Test

class ManagerTest {

    private lateinit var manager: Manager

    @Before
    fun setUp() {
        manager = Manager()
    }

    @Test
    fun case1() {
        assertEquals(7, manager.execute().length)
    }

    @Test
    fun case2() {
        assertEquals("000:000", manager.execute())
    }

    @Test
    fun case3() {
        manager.kill(KillMode.PERSON)

        assertEquals("001:000", manager.execute())
    }

    @Test
    fun case4() {
        manager.kill(KillMode.COUPLE)

        assertEquals("002:000", manager.execute())
    }

    @Test
    fun case5() {
        manager.kill(KillMode.FAMILY)

        assertEquals("003:000", manager.execute())
    }
}