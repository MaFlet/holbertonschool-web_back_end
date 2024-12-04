#!/usr/bin/env python3
"""
Module for basic listing operations
using type-annotated functions.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Return sum as float.
    """
    return float(sum(mxd_lst))
