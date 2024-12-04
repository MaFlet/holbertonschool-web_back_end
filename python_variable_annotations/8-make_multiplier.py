#!/usr/bin/env python3
"""
Module for basic arithmetic operations
using type-annotated functions.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Return a function that multplies a float
    by multiplier
    """
    return lambda x: multiplier * x
