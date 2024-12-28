#!/usr/bin/env python3
"""
Module for helper function that will return
list for paginaton parameters
"""
import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Get items for the specified page
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        dataset = self.dataset()
        try:
            start, end = self.index_range(page, page_size)
            return dataset[start:end]
        except (AssertionError, IndexError):
            return []

    def index_range(self, page: int, page_size: int) -> tuple:
        """
        Function that will return a tuple size two
        containing a start index and an end index
        corresponding to the range of indexes to
        return in a list for those particular
        pagination parameters.
        """
        # Assert that inputs are integers
        assert isinstance(page, int), "page must be an integer"
        assert isinstance(page_size, int), "page_size must be an integer"

        # Assert that inputs are greater than 0
        assert page > 0, "page must be greater than 0"
        assert page_size > 0, "page_size must be greater than 0"

        start_index = (page - 1) * page_size
        end_index = start_index + page_size
        return (start_index, end_index)
