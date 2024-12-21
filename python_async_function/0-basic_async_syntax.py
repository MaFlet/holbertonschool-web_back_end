#!/usr/bin/env python3
"""Asynchronous python programming"""
import asyncio
import random

async def wait_random(max_dalay: int = 10) -> float:
    """
    Asynchronous coroutine that takes an integer argument
    and waits for a random delay and eventually returns it.
    """
    delay = random.uniform(0, max_dalay) # uniform - generates a random float number
    await asyncio.sleep(delay) # suspends coroutine for random duration
    return delay
