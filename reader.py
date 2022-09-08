from datetime import datetime

class reader :

    def __init__(self) :
        self.id = 0
        self.name = ""
        self.books = [] # Each cell is { "bookTitle" : "XXX" , "dateOfBorrowing" : "YYYY-MM-DD"}
    
    def read_book(self, title) :
        date = str(datetime.now().date())
        bookBorrowed = { "title" : title , "dateOfBorrowing" : date}
        self.books.append(bookBorrowed)
    
    def to_json(self) :
        return {
            "id" : self.id,
            "books" : self.books
        }

