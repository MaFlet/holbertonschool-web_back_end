#!/usr/bin/env python3
"""Module script for async generators"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Coroutine that wil execute async_comprehension
    4 times in parallel using asyncio.gather. It
    should measure total runtime and return it.
    """
    start_time = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range (4)))
    end_time = time.perf_counter()
    return end_time - start_time
