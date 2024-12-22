#!/usr/bin/env python3
"""Module script for async generators"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    Coroutine taking no arguments that will loop 10 times,
    each time asynchronously wati 1 second, then yeild a
    random number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
