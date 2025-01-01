#!/usr/bin/env python3
"""
Module for using python for MongoDB
collection 
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based
    on the name
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )