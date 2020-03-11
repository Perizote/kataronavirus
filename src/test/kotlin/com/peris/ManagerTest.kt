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
        manager.kill(Mode.PERSON)

        assertEquals("001:000", manager.execute())
    }

    @Test
    fun case4() {
        manager.kill(Mode.COUPLE)

        assertEquals("002:000", manager.execute())
    }

    @Test
    fun case5() {
        manager.kill(Mode.FAMILY)

        assertEquals("003:000", manager.execute())
    }

    @Test
    fun case6() {
        manager.recover(Mode.PERSON)

        assertEquals("000:001", manager.execute())
    }

    @Test
    fun case7() {
        manager.recover(Mode.COUPLE)

        assertEquals("000:002", manager.execute())
    }

    @Test
    fun case8() {
        manager.recover(Mode.FAMILY)

        assertEquals("000:003", manager.execute())
    }
}