#!/usr/bin/env python3
"""
Module for using python for MongoDB
collection 
"""
from pymongo import MongoClient


def nginx_stats():
    """
    Provides some stats about Nginx logs
    stored in MongoDB
    """
    # Connect to MongoDB
    client = MongoClient('mongodb://127.0.0.1:27017')

    # Get the logs database
    db = client.logs

    # Get the nginx collection
    nginx = db.nginx

    # Get total number of documents
    total_logs = nginx.count_documents({})
    print(f"{total_logs} logs")

    # Print methods stats
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Get status check stats
    status_check = nginx.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print(f"{status_check} status check")

if __name__ == "__main__":
    nginx_stats()
