#!/usr/bin/env python3
"""
Module for basic arithmetic operations
using type-annotated functions.
"""
from typing import List, Tuple

def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """Return values with appropriate types"""
    return [(i, len(i)) for i in lst]
