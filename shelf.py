class shelf : 

    def __init__(self) :
        self.books = [] # A list of Maximum 5 Book objects
        self.is_shelf_full = False # Full if len(self.books) == 5
    
    def add_book(self, book) :
        if (not self.is_shelf_full) : # If there's space on shelf
            self.books.append(book) # Insertion
            if (len(self.books) == 5) : # If after insertion - shelf is full
                self.is_shelf_full = True # Set shelf as full
        else : # If there's NO space on shelf
            print("Shelf is full")

    def replace_books(self, indexA, indexB) :
        if (indexA > 5 or indexB > 5) : # Checks if indexes are in range 
            print("One of the indexes is too big")
        else :
            length = len(self.books)
            if (indexA > length or indexB > length) : # Checks if one of the indexes is empty
                print("There's only " + length + " books on this shelf")
            else : # Switch
                tempBook = self.books[indexA]
                self.books[indexA] = self.books[indexB]
                self.books[indexB] = tempBook
    
    def order_books(self) :
        mapToNumOfPages = map(lambda x : x.num_of_pages , self.books)

        # Sort function
        def sort_arr(arr) :
            output = []
            for i in range(len(arr)) :
                minNum = min(arr)
                arr.remove(minNum)
                output.append(minNum)
            return output
        
        return sort_arr(mapToNumOfPages)







