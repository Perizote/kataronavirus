package com.peris

import junit.framework.Assert.assertEquals
import org.junit.Test

class ManagerTest {

    private val manager = Manager()

    @Test
    fun case1() {
        assertEquals(7, manager.execute().length)
    }

    @Test
    fun case2() {
        assertEquals("000:000", manager.execute())
    }
}