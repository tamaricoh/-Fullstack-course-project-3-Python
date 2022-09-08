class book : 

    def __init__(self) :
        self.author = ""
        self.title = ""
        self.num_of_pages = 0
    
    def to_json(self) :
        return {
            "author" : self.author,
            "title" : self.title,
            "num_of_pages" : self.num_of_pages
        }
    