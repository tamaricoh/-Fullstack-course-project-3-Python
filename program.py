from cmath import log
import email
from tkinter import W
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

print("LOGGING IN - ")
userName = input("Plaese enter USERNAME : ")
email = input("Plaese enter EMAIL : ")
resp = requests.get("https://jsonplaceholder.typicode.com/users")
users = resp.json()
userNames = list(map(lambda x : x["username"] , users))
emails = list(map(lambda x : x["email"] , users))
if (userName in userNames and email in emails) :
    index1 = userNames.index(userName)
    index2 = emails.index(email)
    logged = index1 == index2
else :
    logged = False

# while (logged) :
while (True) :
    print("MENU : " + "\n"
    "• For adding a book - Press 1" + "\n" +
    "• For deleting a book - Press 2" + "\n" +
    "• For changing books locations - Press 3" + "\n" +
    "• For registering a new reader - Press 4" + "\n" +
    "• For removing a reader - Press 5" + "\n" +
    "• For searching books by author - Press 6" + "\n" +
    "• For reading a book by a reader - Press 7" + "\n" +
    "• For ordering all books - Press 8" + "\n" +
    "• For saving all data - Press 9" + "\n" +
    "• For loading data - Press 10" + "\n" +
    "• For exit - Press 11" + "\n" 
        )
    option = int(input("Chose option - "))
    print("\n")

     # Working
    if (option == 1) : 
        print("Adding a book \n")
        bookToAdd = book()
        bookToAdd.author = input("Enter author's name : ")
        bookToAdd.title = input("Enter book's title : ")
        bookToAdd.num_of_pages = int(input("Enter number of pages : "))
        library.add_new_book(bookToAdd)

    # Working
    elif (option == 2) :
        print("Deleting a book \n")
        bookTitle = input("Enter book's title : ")
        library.delete_book(bookTitle)
        # print(library.shelves[0].books[2].title)

    # Working
    elif (option == 3) :
        print("Changing books locations \n")
        bookA = input("Enter first book title : ")
        bookB = input("Enter second book title : ")
        library.change_locations(bookA , bookB)
        # print(library.shelves[0].books[2].title)
        # print(library.shelves[0].books[3].title)

    # Working
    elif (option == 4) :
        print("Registering a new reader \n")
        readerName = input("Enter reader's name : ")
        readerID = input("Enter reader's ID : ")
        library.register_reader(readerName , readerID)
        # print(library.readers[0].name + " " + library.readers[0].id)
    
    # Working
    elif (option == 5) :
        print("Removing a reader \n")
        readerName = input("Enter reader's name : ")
        library.remove_reader(readerName)
        # print(library.readers[0].name + " " + library.readers[0].id)
    
    # Working
    elif (option == 6) :
        print("Searching books by author \n")
        author = input("Enter author name : ")
        books = library.search_by_author(author)
        print("Books written by " + author + " : ")
        for book in books : 
            print("- " + book)
    
    # Working
    elif (option == 7) :
        print("Reading a book by a reader \n")
        readerID = input("Enter reader's ID : ")
        bookTitle = input("Enter book's title : ")
        for reader in library.readers :
            if (reader.id == readerID) :
                reader.read_book(bookTitle)
                break
        

    elif (option == 8) :
        print("Ordering all books \n")
        print("----------------")

    elif (option == 9) :
        print("Saving all data \n")
        print("----------------")

    elif (option == 10) :
        print("Loading data \n")
        print("----------------")

    elif (option == 11) :
        print("Adding a book \n")
        print("----------------")
    
