# Fullstack-course-project-3

## Library management system

### What

This is a Python project, implemented as part of a fullstack course led by Yaniv Arad.

The project is a library management system.
The system allows authorized users to perform certain actions regarding the library (for example, add a book, record a borrowing of a book by a reader, load information from a Json file, etc.)

The main objects are :

1. Checking a user's permissions to perform operations in the system
   - Using 'requests' module.
2. Working with a local database
   - Using 'MongoClient' module.
3. Reading and writing Json files
   - Using 'json' module.
4. Implementation by classes

### How

1. Open the 'src' folder in your VSC

2. Create a database -
   in localhost server, create a new database named "booksDB".
   then, create a collection named "books".

3. When standing in 'program.py' file, click 'Run Python File"

Note -
In the program you are asked to fill in a username and email in order to get permissions to perform actions.
For your convenience, you can put "Bret" in the username and "Sincere@april.biz" in the email and get execute permissions
