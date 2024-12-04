#!/usr/bin/env python3
"""
Module for basic listing operations
using type-annotated functions.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Return sum as a float.
    """
    return sum(input_list)
