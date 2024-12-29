#!/usr/bin/env python3
"""
Module for using python for MongoDB
collection 
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts new document in a collection based
    on kwargs
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
    