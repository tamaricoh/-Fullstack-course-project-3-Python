# from shelf import *


from reader import *
from shelf import *
from book import *


class library :

    def __init__ (self) :
        self.shelves = [] # A list of 3 Shelf objects
        for i in range(3) :
            self.shelves.append(shelf())
        self.readers = [] # A list of Reader objects
    
    def is_there_place_for_a_new_book(self) :
        shelvesStatus = list(map((lambda x : x.is_shelf_full), self.shelves))
        return (not(shelvesStatus[0] and shelvesStatus[1] and shelvesStatus[2])) # If shelfStatus = [True, True, True] return False
    
    def add_new_book(self, newBook) :
        if (self.is_there_place_for_a_new_book()) :
            shelvesWithPlace = list(filter((lambda x : x.is_shelf_full == False), self.shelves)) # Assumming length > 0 because of the condition above
            chosenShelf = shelvesWithPlace[0]
            chosenShelf.add_book(newBook)
    
    def delete_book(self, bookToDelete) :
        for shelf in self.shelves :
            for i in range(len(shelf.books)) :
                if (shelf.books[i].title == bookToDelete) :
                    shelf.books.pop(i)

    def change_locations(self, titleA, titleB) :
        def search(title) :
            for i in range(len(self.shelves)) :
                for j in range(len(self.shelves[i].books)) :
                    if (self.shelves[i].books[j].title == title) :
                        return [i,j]
        placeA = search(titleA)
        placeB = search(titleB)
        temp = self.shelves[placeA[0]].books[placeA[1]]
        self.shelves[placeA[0]].books[placeA[1]] = self.shelves[placeB[0]].books[placeB[1]]
        self.shelves[placeB[0]].books[placeB[1]] = temp
    
    def change_locations_in_same_shelf(self, shelf, bookA , bookB) :
        # Using replacr_books function from 'shelf' class
        self.shelves[shelf].replacr_books(bookA , bookB)
    
    def order_books(self) :
        # Using order_books function from 'shelf' class
        for shelf in self.shelves :
            shelf.order_books()

    def register_reader(self, readerName , readerID) :
        reader = reader()
        reader.name = readerName
        reader.id = readerID
        self.readers.append(reader)
    
    def remove_reader(self, readerName) :
        self.readers = list(filter(
            lambda x : x.name != readerName
        ), self.readers)
    
    def reader_read_book(self, bookTitle , readerName) :
        for reader in self.readers :
            if (reader.name == readerName) :
                reader.read_book(bookTitle)
                break
    
    def search_by_author(self, authorName) :
        output = []
        for shelf in self.shelves :
            for book in shelf.books :
                if (book.author == authorName) :
                    output.append(book.title)
        return output


    
    





