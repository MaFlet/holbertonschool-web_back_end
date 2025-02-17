#!/usr/bin/env python3
"""Asynchronous python programming"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """
    Takes 2 int arguments: n and max_delay.
    Will spawn n times with specifief max_delay
    """
    delays = []
    tasks = []
    # Create n tasks
    for _ in range(n):
        tasks.append(task_wait_random(max_delay))

    # Wait for all tasks to complete and collect delays
    for task in tasks:
        delay = await task
        delays.append(delay)

    return sorted(delays)
