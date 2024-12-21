#!/usr/bin/env python3
"""
Module for basic arithmetic operations
using type-annotated functions.
"""
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return values with appropriate types"""
    return [(i, len(i)) for i in lst]
