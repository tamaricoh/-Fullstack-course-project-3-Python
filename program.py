from cmath import log
import email
from pymongo import MongoClient
import requests
from reader import *
from shelf import *
from book import *
from library import *

# User should create a "books" collection inside "booksDB" database in the localhost

client = MongoClient() 
DB = client["booksDB"]
collection = DB["books"]
collection.insert_one({
    "author" : "Sheldon Axler", 
    "title" : "Linear Algebra Done Right", 
    "num_of_pages" : 340.0
})
collection.insert_one({
    "author" : "Mike Hochman", 
    "title" : "Infinitesimal calculus", 
    "num_of_pages" : 553.0
})
collection.insert_one({
    "author" : "Vikas Swarup", 
    "title" : "Q & A", 
    "num_of_pages" : 304.0
})
collection.insert_one({
    "author" : "Yann Martel", 
    "title" : "Life of Pi", 
    "num_of_pages" : 352.0
})
collection.insert_one({
    "author" : "Khaled Hosseini", 
    "title" : "The Kite Runner", 
    "num_of_pages" : 371.0
})
collection.insert_one({
    "author" : "Dinah Jefferies", 
    "title" : "The Tea Planter's Wife", 
    "num_of_pages" : 448.0
})

library = library()
booksArr = list(collection.find({}))
for i in range(len(library.shelves)) :
    for j in range(2) :
        bookToAdd = book()
        bookToAdd.author = booksArr[(2*i)+j]["author"]
        bookToAdd.title = booksArr[(2*i)+j]["title"]
        bookToAdd.num_of_pages = booksArr[(2*i)+j]["num_of_pages"]
        library.shelves[i].add_book(bookToAdd)
