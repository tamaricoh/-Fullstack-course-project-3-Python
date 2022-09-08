# from shelf import *


from shelf import shelf


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
            shelvesWithPlace = list(filter((lambda x : x.is_shelf_full == True), self.shelves)) # Assumming length > 0 because of the condition above
            chosenShelf = shelvesWithPlace[0]
            chosenShelf.add_book(newBook)
    
    def delete_book(self, bookToDelete) :
        for shelf in self.shelves :
            for i in range(len(shelf.books)) :
                if (shelf.books[i].name == bookToDelete) :
                    shelf.books.pop(i)

    def change_locations(self, titleA, titleB) :
        for shelf in self.shelves :
            booksOnShelf = list(map((lambda x : x.title) , shelf.books))
            if (titleA in booksOnShelf and titleB in booksOnShelf) : # If in the same shelf.
                shelf.replacr_books(booksOnShelf.index(titleA), booksOnShelf.index(titleB))
                break
            # maybe????????
        def search (self , title) :
            for i in range(self.shelves) :
                for j in range(self.shelves[i].books) :
                    if (self.shelves[i].books[j].title == title) :
                        return [i,j]
        placeA = self.search(titleA)
        placeB = self.search(titleB)
        temp = self.shelves[placeA[0]].books[placeA[1]]
        self.shelves[placeA[0]].books[placeA[1]] = self.shelves[placeB[0]].books[placeB[1]]
        self.shelves[placeB[0]].books[placeB[1]] = temp

lala = library()




